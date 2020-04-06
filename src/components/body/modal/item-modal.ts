import * as $ from 'jquery'

import './item-modal.css'
import helpers from '../helpers'
import store from '../../../store/store'

const events = {
  onShowBsModal: () => {
    const item = helpers.getCurrentItem()
  
    $("#itemModal").addClass("zoomIn faster")
    $("#itemModalContent").html("").append(
      item ? 
      $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title) :
      $("<img>").addClass("img-fluid")
    )
  },
  onShownBsModal: () => {
    store.itemModalOpen = true
    $(".modal-backdrop").addClass("animated backdrop-fadeIn faster")
  },
  onHiddenBsModal: () => {
    store.itemModalOpen = false
    helpers.adjustModals()
  }
}

const ItemModal = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "itemModal")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .on("show.bs.modal", events.onShowBsModal)
  .on("shown.bs.modal", events.onShownBsModal)
  .on("hidden.bs.modal", events.onHiddenBsModal)
  .append(
    $("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document").append(
      $("<div>").attr("id", "itemModalContent")
    )
  ) as JQuery<HTMLDivElement>

export default ItemModal
