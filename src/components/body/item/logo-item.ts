import * as $ from 'jquery'

import './logo-item.css'
import { ItemModel } from '../../../models/item-model'
import store from '../../../store/store'

const events = {
  onLogoItemClick: (logoItem: ItemModel) => {
    store.currentLogoItem = logoItem
    $("#item-modal").modal("show")
  }
}

const ItemLogo = (item: ItemModel): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("logo-item animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title)
          .on("click", () => events.onLogoItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default ItemLogo