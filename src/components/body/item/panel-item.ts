import * as $ from 'jquery'

import './panel-item.css'
import { PanelItem } from '../../../models/client-item-model'
import store from '../../../store/store'
import ItemPopupModal from '../../modal/item-popup-modal'

const events = {
  onPanelItemClick: (panelItem: PanelItem) => {
    store.itemModalCurrentItem = {
      id: panelItem.id,
      img: panelItem.imgPopup !== "" ? panelItem.imgPopup : panelItem.img
    }
    
    ItemPopupModal.showModal()
  }
}

const PanelItemComponent = (item: PanelItem): JQuery<HTMLDivElement> =>
  $("<div>").addClass("panel-item-parent col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("panel-item animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid panel-item-img").attr("src", `data:image/png;base64,${item.img}`).attr("alt", item.id)
          .on("click", () => events.onPanelItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default PanelItemComponent