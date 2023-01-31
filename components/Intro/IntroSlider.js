import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import img1 from '@/public/slider_img/img_1.png';
import img2 from '@/public/slider_img/img_2.png';
import img3 from '@/public/slider_img/img_3.jpg';
import img4 from '@/public/slider_img/img_4.jpg';
import img5 from '@/public/slider_img/img_5.png';
import 'keen-slider/keen-slider.min.css';
import styles from './IntroSlider.module.css';

const images = [img1, img2, img3, img4, img5];

export default function Intro() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true
    },
    [
      (slider) => {
        let timeout;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  return (
    <div ref={sliderRef} className={`${styles.slider} keen-slider`}>
      {images.map((image, index) => (
        <div key={index} className={`${styles.slide} keen-slider__slide`}>
          <Image
            className={styles.image}
            src={image.src}
            width={image.width}
            height={image.height}
            alt="some picture of slider"
          />
        </div>
      ))}
    </div>
  );
}
