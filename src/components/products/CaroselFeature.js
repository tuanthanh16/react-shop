import { Carousel } from "react-bootstrap";
import FeatureItem from "./FeatureItem";

const CaroselFeature = () => {
  return (
    <div className="well well-small">
      <h4>
        Featured Products{" "}
        <small className="pull-right">200+ featured products</small>
      </h4>
      <div className="row-fluid">
        <Carousel>
          <Carousel.Item>
            <FeatureItem
              link="product.html"
              img="themes/images/products/b1.jpg"
              caption="Boot"
              price={210}
            />
            <FeatureItem
              link="product.html"
              img="themes/images/products/1.jpg"
              caption="Canon compact"
              price={110}
            />
            <FeatureItem
              link="product.html"
              img="themes/images/products/9.jpg"
              caption="Camera kit"
              price={110}
            />
          </Carousel.Item>
          <Carousel.Item>
            <FeatureItem
              link="product.html"
              img="themes/images/products/kindle.png"
              caption="Kindle"
              price={110}
            />
            <FeatureItem
              link="product.html"
              img="themes/images/products/2.jpg"
              caption="Camera"
              price={110}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CaroselFeature;
