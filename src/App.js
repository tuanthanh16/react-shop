// import "./App.css";

import Carosel from "./components/carosel/Carosel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import SideBar from "./components/sidebars/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Carosel />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
