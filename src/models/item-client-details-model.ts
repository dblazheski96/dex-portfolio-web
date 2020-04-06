import { ClientPanelModel } from "./client-panel-model";

export type ItemClientDetailsModel = {
  id?: number
  desc?: string
  panels? : Array<ClientPanelModel>
}