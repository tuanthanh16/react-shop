const CaroselItem = ({ link, img, text, description }) => {
  return (
    <div className="item active">
      <div className="container">
        <a href={link}>
          <img style={{ width: "100%" }} src={img} alt="" />
        </a>
        <div className="carousel-caption">
          <h4>{text}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CaroselItem;
