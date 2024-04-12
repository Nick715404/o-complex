export interface IProduct {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export interface IFetchedProduct {
  page: number;
  amount: number;
  total: number;
  products: IProduct[]
}