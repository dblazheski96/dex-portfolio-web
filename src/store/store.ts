import { NavOpt } from '../models/nav-opt'
import { ItemModel } from '../models/item-model'

import { clientItems } from './items'
import { ItemClientModel } from '../models/item-client-model'
import { ClientItem } from '../models/client-item-model'

type GlobalStore = {
  navOpt: NavOpt
  itemModalOpen: boolean
  itemModalCurrentItem: { id: string, img: string }
  clientDetailsModalOpen: boolean
  clientDetailsModalCurrentItem: ClientItem
  currentClientPanelItem: ItemModel
}

// Initial store values
const store: GlobalStore = {
  navOpt: NavOpt.Landing,
  itemModalOpen: false,
  itemModalCurrentItem: null,
  clientDetailsModalOpen: false,
  clientDetailsModalCurrentItem: null,
  currentClientPanelItem: clientItems[0].clientDetails.panels[0].panelItems[0]
}

export default store
