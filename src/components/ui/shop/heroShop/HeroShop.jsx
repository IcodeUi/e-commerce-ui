import { useEffect, useState, useRef } from "react";
import { HeroShopData } from "../../../../constant/Data";
import "../../style/HeroShop.scss";
import Indicators from "./Indicator/Indicators";
import OnClick from "./onClick/OnClick";
function HeroShop() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = HeroShopData.length;
  const slideInterval = useRef(null);
  const autoPlay = useRef(true);

  console.log(currentSlide);
  // next slide
  const NextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideLength - 1 ? 0 : prevSlide + 1
    );
  };
  // back slide
  const BackSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideLength - 1 : prevSlide - 1
    );
  };
  // auto slide intervale
  const autoSlide = () => {
    slideInterval.current = setInterval(NextSlide, 5000);
  };

  // clear interval
  useEffect(() => {
    setCurrentSlide(0);
    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  // auto play clear interval and autoslide function call
  useEffect(() => {
    if (autoPlay.current) {
      autoSlide();
    }
    return () => {
      clearInterval(slideInterval.current);
    };
  }, [currentSlide, autoSlide]);

  //

  return (
    <section className=" t-hero-shop-container">
      <div className="w-full  t-carousel">
        {HeroShopData.map((h, index) => {
          return (
            <div
              key={h.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              {index === currentSlide && (
                <>
                  <div className="t-body-h">
                    <h2>{h.title}</h2>
                    <small>{h.description}</small>
                  </div>
                  <div className="img-t-box ">
                    <img
                      src={h.img}
                      alt="new product image"
                      className=" object-cover h-full w-full overflow-hidden rounded-lg "
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
        <Indicators slideLength={slideLength} currentSlide={currentSlide} />
    </section>
  );
}

export default HeroShop;
