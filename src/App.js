import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import MyCarosel from "./components/carosel/MyCarosel";

function App() {
  return (
    <div className="App">
      <Header />
      <MyCarosel />

      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
