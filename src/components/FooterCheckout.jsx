export default function FooterCheckout({ total, checkout, disabled }) {
  return (
    <div className="checkout-bar" id="checkout">
      <div>
        <span>Total do pedido</span>
        <strong>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </strong>
      </div>

      <button onClick={checkout} disabled={disabled}>
        Finalizar compra
      </button>
    </div>
  )
}