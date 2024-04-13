import styles from './Reviews.module.scss';

import Review from '../Review/Review';
import { fetchReviews } from '@/api/reviews/reviews';
import { IReview } from '@/interfaces/reviews';
import SwiperCustom from '../Swiper/Swiper';

export default async function Home() {

  const reviews: IReview[] = await fetchReviews();

  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.reviewsWrapper}>
          <SwiperCustom data={reviews} />
        </div>
      </div>
    </section>
  );
}
