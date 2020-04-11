import * as $ from 'jquery'

import './item-popup-modal.css'
import helpers from '../../../services/helpers'
import store from '../../../store/store'

const events = {
  onShowBsModal: () => {
    store.itemModalOpen = true
    $("#item-popup-modal").addClass("zoomIn faster")
    
    const item = store.itemModalCurrentItem
    $("#item-popup-modal-content").html("").append(
      item ? 
      $("<img>").addClass("img-fluid").attr("src", `data:image/png;base64,${item.img}`).attr("alt", item.id) :
      $("<img>").addClass("img-fluid")
    )
  },
  // on this modal only fadeIn animation is supported, fadeOut is implemented for future purposes
  onShownBsModal: () => {
    $(".modal-backdrop")
      .removeClass("item-popup-backdrop-fade-out")
      .addClass("animated item-popup-backdrop item-popup-backdrop-fade-in faster")
  },
  onHiddenBsModal: () => {
    store.itemModalOpen = false
    helpers.adjustModals()
  }
}

const ItemPopupModal = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "item-popup-modal")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .on("show.bs.modal", events.onShowBsModal)
  .on("shown.bs.modal", events.onShownBsModal)
  .on("hidden.bs.modal", events.onHiddenBsModal)
  .append(
    $("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document").append(
      $("<div>").attr("id", "item-popup-modal-content")
    )
  ) as JQuery<HTMLDivElement>

export default ItemPopupModal
