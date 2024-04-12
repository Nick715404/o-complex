export const fetchProducts = async (page: number) => {
  const page_size = 20;
  try {
    const response = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=${page_size}`, {
      next: {
        revalidate: 240,
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products!');
  }
};