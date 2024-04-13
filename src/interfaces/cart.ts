export interface ICart {
  id: number;
  quantity: number;
}

export interface ICartOrder {
  phone: string;
  cart: ICart[];
}