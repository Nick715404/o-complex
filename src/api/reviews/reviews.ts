export const fetchReviews = async () => {
  const response = await fetch('http://o-complex.com:1337/reviews', {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  });

  if (!response.ok) return new Error('Error while fetching reviews');
  const data = await response.json();

  return data;
}