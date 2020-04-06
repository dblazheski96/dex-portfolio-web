import * as $ from 'jquery'

import './item-modal.css'
import helpers from '../helpers'
import store from '../../../store/store'

const events = {
  onShowBsModal: () => {
    store.itemModalOpen = true
    $("#item-modal").addClass("zoomIn faster")
    
    const item = helpers.getCurrentItem()
    $("#item-modal-content").html("").append(
      item ? 
      $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title) :
      $("<img>").addClass("img-fluid")
    )
  },
  // on this modal only fadeIn animation is supported, fadeOut is implemented for future purposes
  onShownBsModal: () => {
    $(".modal-backdrop")
      .removeClass("item-backdrop-fade-out")
      .addClass("animated item-backdrop item-backdrop-fade-in faster")
  },
  onHiddenBsModal: () => {
    store.itemModalOpen = false
    helpers.adjustModals()
  }
}

const ItemModal = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "item-modal")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .on("show.bs.modal", events.onShowBsModal)
  .on("shown.bs.modal", events.onShownBsModal)
  .on("hidden.bs.modal", events.onHiddenBsModal)
  .append(
    $("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document").append(
      $("<div>").attr("id", "item-modal-content")
    )
  ) as JQuery<HTMLDivElement>

export default ItemModal
