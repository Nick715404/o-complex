import Cart from "@/components/Cart/Cart";
import ProductsList from "@/components/ProductsList/ProductsList";
import ReviewsList from "@/components/ReviewsList/ReviewsList";

export default function Home({ }) {
  return (
    <>
      <ReviewsList />
      <Cart />
      <ProductsList />
    </>
  );
}
