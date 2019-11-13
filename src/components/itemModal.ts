import * as $ from 'jquery'

import './itemModal.css'
import { ItemModel } from '../models/itemModel'

export default function(item: ItemModel): JQuery<HTMLDivElement> {

  let modalEl: JQuery<HTMLDivElement> = $("#itemModal")
  if(!modalEl.length) {
    modalEl = 
      $("<div>").addClass("modal animated")
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
  ).on("hide.bs.modal", () => {
      modalEl.removeClass("zoomIn").addClass("zoomOut")
    })
    .on("hidden.bs.modal", () => {

    })
    .on("show.bs.modal", () => {
      modalEl.removeClass("zoomOut").addClass("zoomIn faster")
    })
    .on("shown.bs.modal", () => {
      // modalEl.removeClass("zoomIn").addClass("zoomOut")
      $(".modal-backdrop").addClass("animated backdrop-fadeIn faster")
    })

  return modalEl
}