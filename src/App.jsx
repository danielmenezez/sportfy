import { useMemo, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductsGrid from "./components/ProductsGrid"
import FooterCheckout from "./components/FooterCheckout"
import CartDrawer from "./components/CartDrawer"
import { products } from "./data/products"

export default function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  function addToCart(product) {
    setCart((currentCart) => {
      const productAlreadyInCart = currentCart.find(
        (item) => item.id === product.id
      )

      if (productAlreadyInCart) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })

    setIsCartOpen(true)
  }

  function increaseItem(productId) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decreaseItem(productId) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function removeItem(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    )
  }

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      return sum + item.price * item.quantity
    }, 0)
  }, [cart])

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => {
      return sum + item.quantity
    }, 0)
  }, [cart])

  async function checkout() {
    if (cart.length === 0) {
      alert("Adicione um produto ao carrinho antes de finalizar.")
      return
    }

    const apiUrl = import.meta.env.VITE_API_URL

    if (!apiUrl) {
      alert("Erro: VITE_API_URL não está configurada.")
      return
    }

    try {
      const response = await fetch(`${apiUrl}/api/create-preference`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cart,
          customer: {
            name: "Cliente SportFY",
            email: "cliente@sportfy.com"
          }
        })
      })

      const data = await response.json()

      if (!response.ok) {
        console.error(data)
        alert("Erro ao criar pagamento. Verifique o backend.")
        return
      }

      window.location.href = data.sandbox_init_point || data.init_point
    } catch (error) {
      console.error(error)
      alert("Erro ao conectar com o backend.")
    }
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
      />

      <Hero />

      <ProductsGrid
        products={products}
        addToCart={addToCart}
      />

      <FooterCheckout
        total={total}
        checkout={checkout}
        disabled={cart.length === 0}
      />

      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        total={total}
        closeCart={() => setIsCartOpen(false)}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
        removeItem={removeItem}
        checkout={checkout}
      />
    </>
  )
}