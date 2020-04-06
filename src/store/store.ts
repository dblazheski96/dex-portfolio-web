import { NavOpt } from '../models/nav-opt'
import { ItemModel } from '../models/item-model'

import { logoItems, clientItems } from './items'
import { ItemClientModel } from '../models/item-client-model'

type Store = {
  navOpt: NavOpt
  itemModalOpen: boolean
  clientDetailsModalOpen: boolean
  logoItems: Array<ItemModel>
  clientItems: Array<ItemClientModel>
  currentLogoItem: ItemModel
  currentClientItem: ItemClientModel
  currentClientPanelItem: ItemModel
}

const store: Store = {
  navOpt: NavOpt.None,
  itemModalOpen: false,
  clientDetailsModalOpen: false,
  logoItems: logoItems,
  clientItems: clientItems,
  currentLogoItem: logoItems[0],
  currentClientItem: clientItems[0],
  currentClientPanelItem: clientItems[0].clientDetails.panels[0].panelItems[0]
}

export default store
