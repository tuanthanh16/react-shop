import CaroselFeature from "./products/CaroselFeature";
import ProductThumb from "./products/ProductThumb";

const ProductList = () => {
  return (
    <div className="span9">
      <CaroselFeature />
      <h4>Latest Products </h4>
      <ul className="thumbnails">
        <ProductThumb
          link="product.html"
          img="themes/images/products/6.jpg"
          caption="Sandisk"
          text="Good product"
          price={220}
        />
        <ProductThumb
          link="product.html"
          img="themes/images/products/8.jpg"
          caption="Sandisk Extreme"
          text="16GB"
          price={250}
        />
      </ul>
    </div>
  );
};

export default ProductList;
