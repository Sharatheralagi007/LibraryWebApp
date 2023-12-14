import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Testimonials = () => {
  useEffect(() => {
    const testimonialData = [
      
      {
        avatar: 'https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg',
        name: 'Simonette Lindermann',
        review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!",
      },
      
      // Add other testimonial data here...
    ];

    const slideHolder = document.querySelector('#slideHolder');

    for (const testimonial of testimonialData) {
      slideHolder.innerHTML += `
        <div class="swiper-slide">
          <div class="ImgHolder">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" />
          </div>
          <div class="ContentHolder">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.review}</p>
          </div>
        </div>
      `;
    }

    const swiper = new Swiper('#craouselContainer', {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2.3,
      loop: true,
      spaceBetween: 30,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: { delay: 5000 },
    });

    window.onresize = queryResizer;
    queryResizer();

    function queryResizer() {
      if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
      if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
      if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
      if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
      swiper.update();
    }
  }, []);

  return (
    <div className="swiper-container" id="craouselContainer">
      <div className="swiper-wrapper" id="slideHolder">
        {/* Slides will be dynamically generated here */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Testimonials;
