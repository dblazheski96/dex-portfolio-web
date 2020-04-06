import * as $ from 'jquery'

import './client-panel-item.css'
import { ItemModel } from '../../../models/item-model'
import store from '../../../store/store'

const events = {
  onClientPanelItemClick: (clientPanelItem: ItemModel) => {
    store.currentClientPanelItem = clientPanelItem
    $("#item-modal").modal("show")
  }
}

const ClientPanelItem = (item: ItemModel): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("item-client animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title)
          .on("click", () => events.onClientPanelItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientPanelItem