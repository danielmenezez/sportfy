export default function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>

        <button onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  )
}