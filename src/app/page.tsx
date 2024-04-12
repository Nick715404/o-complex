import ProductsList from "@/components/ProductsList/ProductsList";
import ReviewsList from "@/components/ReviewsList/ReviewsList";

export default function Home({ }) {
  return (
    <div className="page">
      <ReviewsList />
      <ProductsList />
    </div>
  );
}
