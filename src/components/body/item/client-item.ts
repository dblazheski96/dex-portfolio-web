import * as $ from 'jquery'

import './client-item.css'
import { ClientItem } from '../../../models/client-item-model'
import store from '../../../store/store'
import dataService from '../../../services/dataService'
import ClientDetailsModal from '../../modal/client-details-modal'
import Loader from '../../loader/loader'

const events = {
  onClientItemClick: async (clientItem: ClientItem) => {
    Loader.showLoader()
    const clientItemWithPanels: ClientItem = {
      ...clientItem,
      panels: [...await dataService.getClientPanels(clientItem.id)]
    }
    Loader.hideLoader()

    store.clientDetailsModalCurrentItem = clientItemWithPanels
    ClientDetailsModal.showModal()
  }
}

const ClientItemComponent = (item: ClientItem): JQuery<HTMLDivElement> =>
  $("<div>").addClass("client-item-parent col-sm-9 col-lg-5 col-xl-3").append(
    $("<div>").addClass("client-item animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("client-img img-fluid").attr("src", `data:image/png;base64,${item.img}`).attr("alt", item.title)
          .on("click", () => events.onClientItemClick(item)),
        $("<div>").addClass("client-title text-center").text(item.title)
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientItemComponent