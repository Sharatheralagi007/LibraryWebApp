import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/images';

function ImageSlider() {
  return (
    <div className="imgslider">
       <Carousel>
        <Carousel.Item interval={3000}>
          <img src="kleclg.jpg"  height={540} alt="" />
      
      </Carousel.Item>

   
      <Carousel.Item interval={3000}>
        <img src="clgimg.jpg"  height={540} alt="" />
      
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src="libimg1.jpg" height={540} alt="" />
      </Carousel.Item>
      
        <Carousel.Item interval={3000}>
         <img src="libimg2.jpg" height={540} alt="" />
      </Carousel.Item>
      
      <Carousel.Item>
         <img src="library-with-books.jpg" height={540} alt="" />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageSlider;