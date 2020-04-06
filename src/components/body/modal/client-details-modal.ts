import * as $ from 'jquery'

import './client-details-modal.css'
import helpers from '../helpers'
import store from '../../../store/store'
import ClientDetailLayout from '../layout/client-details'

const events = {
  onShowBsModal: () => {
    $("#clientDetailsModal").addClass("slideInLeft faster")
    $("#clientDetailsModalContent").html("").append(
      ClientDetailLayout()
    )
  },
  onShownBsModal: () => {
    store.clientDetailsModalOpen = true
    $(".modal-backdrop").addClass("animated client-details-backdrop-fadeIn faster")
  },
  onHiddenBsModal: () => {
    store.clientDetailsModalOpen = false
    helpers.adjustModals()
  }
}

const ClientDetailsModal = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "clientDetailsModal")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .on("show.bs.modal", events.onShowBsModal)
  .on("shown.bs.modal", events.onShownBsModal)
  .on("hidden.bs.modal", events.onHiddenBsModal)
  .append(
    $("<div>").attr("id", "clientDetailsModalContent").addClass("container-fluid")
  ) as JQuery<HTMLDivElement>

export default ClientDetailsModal