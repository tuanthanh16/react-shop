import CartSummary from "./CartSummarry";
import SubMenu from "./SubMenu";
import ThumbItem from "./ThumbItem";

const SideBar = () => {
  return (
    <div id="sidebar" className="span3">
      <CartSummary text="3 items" total={155.55} />

      <ul id="sideManu" className="nav nav-tabs nav-stacked">
        <SubMenu
          title="ELECTRONICS [30]"
          list={[
            {
              link: "test.html",
              text: "Camera",
            },
            {
              link: "index.html",
              text: "Ipad",
            },
          ]}
        />
        <SubMenu
          title="CLOTHES [10]"
          list={[
            {
              link: "test.html",
              text: "Boots",
            },
            {
              link: "index.html",
              text: "Shoes",
            },
          ]}
        />
      </ul>
      <br />
      <ThumbItem
        img="themes/images/products/panasonic.jpg"
        caption="Samsung"
        link="product.html"
        price={1000}
      />
      <ThumbItem
        img="themes/images/products/kindle.png"
        caption="Kindle"
        link="product.html"
        price={220}
      />

      <div className="thumbnail">
        <img
          src="themes/images/payment_methods.png"
          title="Bootshop Payment Methods"
          alt="Payments Methods"
        />
        <div className="caption">
          <h5>Payment Methods</h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
