'use client';

import styles from './Swiper.module.scss';

import Review from '../Review/Review';
import { IReview } from '@/interfaces/reviews';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

type Props = {
  data: IReview[]
}

export default function SwiperCustom({ data }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop
      breakpoints={{
        320: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        900: {
          spaceBetween: 20,
          slidesPerView: 3
        }
      }}
      autoplay={{
        delay: 2300,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {
        data.map((item: IReview, index: number) => (
          <SwiperSlide key={index}>
            <Review data={item} />
          </SwiperSlide>
        ))
      }
      < SwiperSlide className={styles.slide} > Review</SwiperSlide >
      <SwiperSlide className={styles.slide}>Review</SwiperSlide>
      <SwiperSlide className={styles.slide}>Review</SwiperSlide>
    </Swiper >
  )
}