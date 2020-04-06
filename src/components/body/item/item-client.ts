import * as $ from 'jquery'

import './item-client.css'
import { ItemClientModel } from '../../../models/item-client-model'
import store from '../../../store/store'

const events = {
  onClientItemClick: (clientItem: ItemClientModel) => {
    store.currentClientItem = clientItem
    $("#clientDetailsModal").modal("show")
  }
}

const ItemClient = (item: ItemClientModel): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("item-client animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title)
          .on("click", () => events.onClientItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default ItemClient