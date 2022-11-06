// display product thumbnail in product list section
const ProductThumb = ({ link, img, caption, text, price }) => {
  const cartLink = "cart.html";
  return (
    <li className="span3">
      <div className="thumbnail">
        <a href={link}>
          <img src={img} alt="" />
        </a>
        <div className="caption">
          <h5>{caption}</h5>
          <p>{text}</p>

          <h4 style={{ textAlign: "center" }}>
            <a className="btn" href={link}>
              {" "}
              <i className="icon-zoom-in"></i>
            </a>{" "}
            <a className="btn" href={cartLink}>
              Add to <i className="icon-shopping-cart"></i>
            </a>{" "}
            <a className="btn btn-primary" href="#">
              ${price}
            </a>
          </h4>
        </div>
      </div>
    </li>
  );
};

export default ProductThumb;
