import Carousel from "react-bootstrap/Carousel";

function MyCarosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="themes/images/carousel/1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Gucci Boot</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="themes/images/carousel/2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Kindle Whitepaper</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="themes/images/carousel/3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nikon D3100</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarosel;
