import { NavOpt } from '../models/nav-opt'
import { ClientItem } from '../models/client-item-model'

type GlobalStore = {
  navOpt: NavOpt
  itemModalOpen: boolean
  itemModalCurrentItem: { id: string, img: string }
  clientDetailsModalOpen: boolean
  clientDetailsModalCurrentItem: ClientItem
}

// Initial store values
const store: GlobalStore = {
  navOpt: NavOpt.Landing,
  itemModalOpen: false,
  itemModalCurrentItem: null,
  clientDetailsModalOpen: false,
  clientDetailsModalCurrentItem: null
}

export default store
