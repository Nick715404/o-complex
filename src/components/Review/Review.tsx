import styles from './Review.module.scss';

import { IReview } from '@/interfaces/reviews';

interface Props {
  data: IReview
}

const Review = ({ data }: Props) => {
  return (
    <div className={styles.review} dangerouslySetInnerHTML={{ __html: data.text }} />
  );
}

export default Review;
