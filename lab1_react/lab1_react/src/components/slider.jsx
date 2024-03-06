import image_1 from '../assets/slider/data1/images/house03.jpg';
import image_2 from '../assets/slider/data1/images/pexelsphoto186077.jpg';
import image_3 from '../assets/slider/data1/images/39f6e0639465c7e01eaa79e26ada2a48.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>
                <img width={"100%"} src={image_1} alt="house03" />
            </h3>
          </div>
          <div>
            <h3>
                <img width={"100%"} src={image_2} alt="pexelsphoto186077" />
            </h3>
          </div>
          <div>
            <h3>
                <img width={"100%"} src={image_3} alt="39f6e0639465c7e01eaa79e26ada2a48" />
            </h3>
          </div>
        </Slider>
      );
}

export default SliderHome;