import React from "react";
import "./banner.styles.scss";
import { BsDot } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const slides = [
  "https://images.pexels.com/photos/12729102/pexels-photo-12729102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg",
  "https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function Banner() {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;
  const timeout = React.useRef(null);

  React.useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 6000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="banner-container">
      {slides.map(
        (item, index) =>
          current === index && <img src={item} className="image" />
      )}
      <div className="arrow-container">
        <div onClick={prevSlide} className="arrow-background">
          <AiOutlineLeft className="arrow" />
        </div>
        <div onClick={nextSlide} className="arrow-background">
          <AiOutlineRight className="arrow" />
        </div>
      </div>

      <div className="indicator-container">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`indicator ${current === index && "indicator-current"}`}
            onClick={() => setCurrent(index)}
          >
            <BsDot />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
