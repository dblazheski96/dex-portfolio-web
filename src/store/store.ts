import { NavOpt } from "../models/nav-opt";
import { ItemModel } from '../models/item-model'

import { items } from './items'

type Store = {
  navOpt: NavOpt,
  items: Array<ItemModel>,
  currentItem: ItemModel
}

const store: Store = {
  navOpt: NavOpt.None,
  items: items,
  currentItem: items[0]
}

export default store
