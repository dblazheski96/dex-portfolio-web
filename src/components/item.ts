import * as $ from 'jquery'

import './item.css'
import { ItemModel } from '../models/itemModel'
import { NavOpt } from '../models/navOpts'

export default function(item: ItemModel, setCurrentItem: (item: ItemModel) => void) {
  return (
    $("<div>").addClass(`${
        item.category === NavOpt.Logos ? "itemLogo" :
        item.category === NavOpt.Events ? "itemEvent" :
        item.category === NavOpt.Print ? "itemPrint" :
        "itemNone"
      } animated zoomIn delay-1s`).append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title)
          .on("click", () => {
            setCurrentItem(item)
            $("#itemModal").modal('toggle')
          })
      )
    )
  )
}
