const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div id="logoArea" className="navbar">
          <a
            id="smallScreen"
            data-target="#topMenu"
            data-toggle="collapse"
            className="btn btn-navbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <div className="navbar-inner">
            <a className="brand" href="index.html">
              <img src="themes/images/logo.png" alt="Bootsshop" />
            </a>
            <form
              className="form-inline navbar-search"
              method="post"
              action="products.html"
            >
              <input id="srchFld" className="srchTxt" type="text" />
              <select className="srchTxt">
                <option>All</option>
                <option>CLOTHES </option>
                <option>FOOD AND BEVERAGES </option>
                <option>HEALTH & BEAUTY </option>
                <option>SPORTS & LEISURE </option>
                <option>BOOKS & ENTERTAINMENTS </option>
              </select>
              <button
                type="submit"
                id="submitButton"
                className="btn btn-primary"
              >
                Go
              </button>
            </form>
            <ul id="topMenu" className="nav pull-right">
              <li className="">
                <a href="special_offer.html">Specials Offer</a>
              </li>
              <li className="">
                <a href="normal.html">Delivery</a>
              </li>
              <li className="">
                <a href="contact.html">Contact</a>
              </li>
              <li className="">
                <a
                  href="#login"
                  role="button"
                  data-toggle="modal"
                  style={{ paddingRight: 0 }}
                >
                  <span className="btn btn-large btn-success">Login</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
