import * as $ from 'jquery'

import store from '../store/store'

const helpers = {  
  // since the app has a support for multiple bootstrap modals to be open at once, 
  // this helper method must be called on "hidden.bs.modal" event on each modal.
  // Also if a new modal is implemented in the app, there must be a flag in the store for it.
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