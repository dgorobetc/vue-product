export interface IRootState {
  productList: ProductType[],
  selectedIds: string[],
};

export type ProductType = {
  name: string,
  id: string,
  price: number,
  qty: number,
}