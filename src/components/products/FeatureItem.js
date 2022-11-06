const FeatureItem = ({ link, img, caption, price }) => {
  return (
    <li className="span3">
      <div className="thumbnail">
        <i className="tag"></i>
        <a href={link}>
          <img src={img} alt="" />
        </a>
        <div className="caption">
          <h5>{caption}</h5>
          <h4>
            <a className="btn" href={link}>
              VIEW
            </a>{" "}
            <span className="pull-right">${price}</span>
          </h4>
        </div>
      </div>
    </li>
  );
};

export default FeatureItem;
