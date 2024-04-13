export interface ICart {
  id: number;
  quantity: number;
}

export interface ICartOrder {
  phone: string;
  cart: ICart[];
}

export interface IResponse {
  success: null | number,
  error: string
}