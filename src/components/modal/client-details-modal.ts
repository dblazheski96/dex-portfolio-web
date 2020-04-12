import * as $ from 'jquery'

import './client-details-modal.css'
import helpers from '../../services/helpers'
import store from '../../store/store'
import ClientDetailsLayout from '../body/layout/client-details'

const events = {
  // Works in combination with onAnimationEnd
  onBackIconClick: () => {
    store.clientDetailsModalOpen = false
    $("#client-details-modal").removeClass("slideInLeft").addClass("slideOutLeft faster")
    $(".modal-backdrop")
      .removeClass("client-details-backdrop-fadeIn")
      .addClass("animated client-details-backdrop client-details-backdrop-fadeOut faster")
  },
  // onAnimationEnd is fired when all animations in the modal are finished
  // used to hide the modal when the backIcon animation is finished in ClientDetailLayout 
  onAnimationEnd: () => {
    if (!store.clientDetailsModalOpen) {
      ClientDetailsModal.hideModal()
    }
  },
  onShowBsModal: () => {
    store.clientDetailsModalOpen = true
    $("#client-details-modal").removeClass("slideOutLeft").addClass("slideInLeft faster")
    $("#client-details-modal-content").html("").append(
      ClientDetailsLayout(store.clientDetailsModalCurrentItem, events.onBackIconClick)
    )
  },
  onShownBsModal: () => {
    $(".modal-backdrop")
      .removeClass("client-details-backdrop-fadeOut")
      .addClass("animated client-details-backdrop client-details-backdrop-fadeIn faster")
  },
  onHiddenBsModal: () => {
    helpers.adjustModals()
  }
}

const ClientDetailsModal = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "client-details-modal")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .on("show.bs.modal", events.onShowBsModal)
  .on("shown.bs.modal", events.onShownBsModal)
  .on("hidden.bs.modal", events.onHiddenBsModal)
  .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", events.onAnimationEnd)
  .append(
    $("<div>").attr("id", "client-details-modal-content").addClass("container-fluid")
  ) as JQuery<HTMLDivElement>

ClientDetailsModal.showModal = () => {
  $("#client-details-modal").modal("show")
}

ClientDetailsModal.hideModal = () => {
  $("#client-details-modal").modal("hide")
}

export default ClientDetailsModal