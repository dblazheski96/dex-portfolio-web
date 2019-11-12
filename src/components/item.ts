import * as $ from 'jquery'

import './item.css'
import { ItemModel } from '../models/itemModel'

export default function(item: ItemModel, setCurrentItem: (item: ItemModel) => void) {
  return (
    $("<div>").addClass("item animated zoomIn delay-1s").append(
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
