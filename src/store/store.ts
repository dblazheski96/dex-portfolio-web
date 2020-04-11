import { NavOpt } from '../models/nav-opt'
import { ItemModel } from '../models/item-model'

import { clientItems } from './items'
import { ItemClientModel } from '../models/item-client-model'

type GlobalStore = {
  navOpt: NavOpt
  itemModalOpen: boolean
  itemModalCurrentItem: { id: string, img: string }
  clientDetailsModalOpen: boolean
  clientItems: Array<ItemClientModel>
  currentClientItem: ItemClientModel
  currentClientPanelItem: ItemModel
}

// Initial store values
const store: GlobalStore = {
  navOpt: NavOpt.Clients,
  itemModalOpen: false,
  itemModalCurrentItem: null,
  clientDetailsModalOpen: false,
  clientItems: clientItems,
  currentClientItem: clientItems[0],
  currentClientPanelItem: clientItems[0].clientDetails.panels[0].panelItems[0]
}

export default store
