import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
    <div className="well well-small">
      <h4>
        Featured Products{" "}
        <small className="pull-right">200+ featured products</small>
      </h4>
      <div className="row-fluid">
        <div id="featured" className="carousel slide">
          <div className="carousel-inner">
            <div className="item active">
              <ul className="thumbnails">
                <FeatureItem
                  link="product.html"
                  img="themes/images/products/b1.jpg"
                  caption="Boot"
                  price={210}
                />
                <FeatureItem
                  link="product.html"
                  img="themes/images/products/kindle.png"
                  caption="Kindle"
                  price={110}
                />
              </ul>
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#featured"
            data-slide="prev"
          >
            ‹
          </a>
          <a
            className="right carousel-control"
            href="#featured"
            data-slide="next"
          >
            ›
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
