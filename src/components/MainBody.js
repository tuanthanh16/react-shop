import ProductList from "./ProductList";
import SideBar from "./sidebars/SideBar";

const MainBody = () => {
  return (
    <div id="mainBody">
      <div className="container">
        <div className="row">
          <SideBar />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
