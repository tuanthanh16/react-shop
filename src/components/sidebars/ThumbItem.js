const ThumbItem = ({ img, caption, link, price }) => {
  const cartLink = "cart.html";
  return (
    <div className="thumbnail">
      <img src={img} alt="" />
      <div className="caption">
        <h5>{caption}</h5>
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
  );
};

export default ThumbItem;
