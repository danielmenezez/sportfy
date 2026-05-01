export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="eyebrow">Nova coleção SportFY</span>

        <h1>
          Performance esportiva com estética premium.
        </h1>

        <p>
          Uma loja moderna para produtos esportivos, com carrinho e checkout
          integrado ao Mercado Pago em ambiente sandbox.
        </p>

        <a href="#products" className="hero-button">
          Explorar produtos
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&auto=format&fit=crop"
          alt="Tênis esportivo"
        />
      </div>
    </section>
  )
}