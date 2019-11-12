import * as $ from 'jquery'

import { ItemModel } from '../models/itemModel'

export default function(item: ItemModel): JQuery<HTMLDivElement> {

  let modalEl: JQuery<HTMLDivElement> = $("#itemModal")
  if(!modalEl.length) {
    modalEl = 
      $("<div>").addClass("modal")
        .attr("id", "itemModal")
        .attr("tabindex", "-1")
        .attr("role", "dialog") as JQuery<HTMLDivElement>
  }

  let modalContent: JQuery<HTMLDivElement> = 
  $("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document").append(
    // $("<div>").addClass("modal-content").append(
      // $("<div>").addClass("modal-body").append(
          $("<div>").attr("id", "itemModalAnim").append(
            item ? 
            $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title) as JQuery<HTMLImageElement> :
            $("<img>").addClass("img-fluid") as JQuery<HTMLImageElement>
          )
      // )
    // )
  ) as JQuery<HTMLDivElement>

  modalEl.html("").append(
    modalContent
  )

  return modalEl
}