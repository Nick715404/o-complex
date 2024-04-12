import styles from './Reviews.module.scss';

import Review from '../Review/Review';
import { fetchReviews } from '@/api/reviews/reviews';
import { IReview } from '@/interfaces/reviews';

export default async function Home() {

  const reviews: IReview[] = await fetchReviews();

  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.reviewsWrapper}>
          {reviews && reviews.map((review: IReview, index: number) => (
            <Review key={index} data={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
