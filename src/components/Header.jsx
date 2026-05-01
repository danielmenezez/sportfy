export default function Header({ cartCount, openCart }) {
  return (
    <header className="header">
      <div className="logo">
        Sport<span>F</span><strong>Y</strong>
      </div>

      <nav className="nav">
        <a href="#products">Produtos</a>
        <a href="#categories">Categorias</a>
        <a href="#checkout">Checkout</a>
      </nav>

      <button className="cart-pill" onClick={openCart}>
        Carrinho ({cartCount})
      </button>
    </header>
  )
}