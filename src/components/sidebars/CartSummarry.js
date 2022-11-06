const CartSummary = ({ text, total }) => {
  const cartLink = "cart.html";
  return (
    <div className="well well-small">
      <a id="myCart" href={cartLink}>
        <img src="themes/images/ico-cart.png" alt="cart" />
        {text}
        <span className="badge badge-warning pull-right">${total}</span>
      </a>
    </div>
  );
};

export default CartSummary;
