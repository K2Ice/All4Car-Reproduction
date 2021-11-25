import Swiper,{Navigation} from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
      
const swiperProps = {
  loop: true,
  
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
 
  },
  navigation: {
    nextEl: '#right-arrow',
    prevEl: '#left-arrow',
  },
  
}

const realizationProps = {
  loop: true,
  
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    1180: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
  spaceBetween: 100,
  
  navigation: {
    nextEl: '#right-arrow1',
    prevEl: '#left-arrow1',
  },
}

Swiper.use([Navigation])

new Swiper('.swiper', swiperProps)
new Swiper('.realization-box', realizationProps)