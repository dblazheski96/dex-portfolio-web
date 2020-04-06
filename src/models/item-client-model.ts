import { ItemModel } from "./item-model";

export type ItemClientModel = {
  id?: number,
  title?: string,
  desc?: string,
  img?: string,
  imgPopup?: string,
  clientDetailItems?: Array<ItemModel>
}