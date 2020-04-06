import * as $ from 'jquery'

import { NavOpt } from '../../models/nav-opt'
import { ItemModel } from '../../models/item-model'
import store from '../../store/store'

const helpers = {
  getCurrentItem: (): ItemModel => {
    switch(store.navOpt) {
      case NavOpt.Logos:
        return store.currentLogoItem
      case NavOpt.Clients:
        return store.currentClientDetailItem
      case NavOpt.Services:
        return store.currentLogoItem
      default:
        break
    }
  },
  adjustModals: () => {
    if (store.itemModalOpen || store.clientDetailsModalOpen) {
      $(document.body).addClass("modal-open")
    }
    else {
      $(document.body).removeClass("modal-open")
    }
  }
}

export default helpers