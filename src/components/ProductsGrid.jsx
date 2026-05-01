import ProductCard from "./ProductCard"

export default function ProductsGrid({ products, addToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <div>
          <span>Produtos</span>
          <h2>Destaques da loja</h2>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  )
}