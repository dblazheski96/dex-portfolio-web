import * as $ from 'jquery'

import './item-modal.css'
import store from '../../../store/store'

const events = {
  onShowBsModal: () => {
    $("#itemModal").addClass("zoomIn faster")
    $("#itemModalContent").html("").append(
      store.currentItem ? 
      $("<img>").addClass("img-fluid").attr("src", store.currentItem.img).attr("alt", store.currentItem.title) :
      $("<img>").addClass("img-fluid")
    )
  },
  onShownBsModal: () => {
    $(".modal-backdrop").addClass("animated backdrop-fadeIn faster")
  }
}

const ItemModal = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "itemModal")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .on("show.bs.modal", events.onShowBsModal)
  .on("shown.bs.modal", events.onShownBsModal)
  .append(
    $("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document").append(
      $("<div>").attr("id", "itemModalContent")
    )
  ) as JQuery<HTMLDivElement>

export default ItemModal
