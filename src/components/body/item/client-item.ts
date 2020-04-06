import * as $ from 'jquery'

import './client-item.css'
import { ItemClientModel } from '../../../models/item-client-model'
import store from '../../../store/store'

const events = {
  onClientItemClick: (clientItem: ItemClientModel) => {
    store.currentClientItem = clientItem
    $("#client-details-modal").modal("show")
  }
}

const ClientItem = (item: ItemClientModel): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("client-item animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title)
          .on("click", () => events.onClientItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientItem