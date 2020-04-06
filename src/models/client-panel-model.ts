import { ItemModel } from "./item-model";

export type ClientPanelModel = {
  id?: number
  name?: string
  panelItems?: Array<ItemModel>
}