import CaroselItem from "./CaroselItem";

const Carosel = () => {
  return (
    <div id="carouselBlk">
      <div id="myCarousel" className="carousel slide">
        <div className="carousel-inner">
          <CaroselItem
            link="register.html"
            img="themes/images/carousel/2.png"
            text="My Carosel"
            description="there is somthing"
          />
        </div>
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          &lsaquo;
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          &rsaquo;
        </a>
      </div>
    </div>
  );
};

export default Carosel;
