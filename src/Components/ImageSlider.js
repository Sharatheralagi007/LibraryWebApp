import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/images';

function ImageSlider() {
  return (
    <div className="imgslider">
       <Carousel>
        <Carousel.Item interval={3000}>
          <img src="lib1.jpg"  height={600} alt="" />
      
      </Carousel.Item>

   
      <Carousel.Item interval={3000}>
        <img src="lib2.jpg"  height={600} alt="" />
      
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src="lib3.jpg" height={600} alt="" />
      </Carousel.Item>
      
        <Carousel.Item interval={3000}>
         <img src="lib4.jpg" height={600} alt="" />
      </Carousel.Item>
      
      <Carousel.Item>
         <img src="lib6.jpg" height={600} alt="" />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageSlider;