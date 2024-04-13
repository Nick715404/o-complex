import { ICartOrder } from "@/interfaces/cart";

export const fetchProducts = async (page: number) => {
  const page_size = 20;
  try {
    const response = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=${page_size}`, {
      next: {
        revalidate: 60,
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

export const postProduct = async (formData: ICartOrder) => {
  const url = 'http://o-complex.com:1337/order';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'content-type': 'application/json' }
    });

    if (!response.ok) throw new Error('Failed to send data!');

    const success = {
      "success": 1,
      "error": ''
    }
    return success;
  }
  catch (error: any) {
    const errorInfo = {
      "success": 0,
      "error": `${new Error('Failed to send data!')}`
    }
    console.log(errorInfo);
    return errorInfo;
  }
};