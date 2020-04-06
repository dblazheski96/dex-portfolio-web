import { ItemClientDetailsModel } from "./item-client-details-model";

export type ItemClientModel = {
  id?: number
  title?: string
  img?: string
  clientDetails?: ItemClientDetailsModel
}