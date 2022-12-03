import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import slider1 from "../../assets/slider-images/slider-1.jpg";
import slider2 from "../../assets/slider-images/slider-2.jpg";
import slider3 from "../../assets/slider-images/slider-3.jpg";
import slider4 from "../../assets/slider-images/slider-4.jpg";
import slider5 from "../../assets/slider-images/slider-5.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        animation="cubeAnimation"
      >
        <div data-src={slider1} />
        <div data-src={slider2} />
        <div data-src={slider3} />
        <div data-src={slider4} />
        <div data-src={slider5} />
      </AutoplaySlider>
    </>
  );
};

export default Slider;
