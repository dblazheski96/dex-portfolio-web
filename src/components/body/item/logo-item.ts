import * as $ from 'jquery'

import './logo-item.css'
import { LogoItem } from '../../../models/logo-item-model'
import store from '../../../store/store'
import ItemPopupModal from '../../modal/item-popup-modal'

const events = {
  onLogoItemClick: (logoItem: LogoItem) => {
    store.itemModalCurrentItem = { 
      id: logoItem.id, 
      img: logoItem.imgPopup !== "" ? logoItem.imgPopup : logoItem.img 
    }
    
    ItemPopupModal.showModal()
  }
}

const LogoItemComponent = (item: LogoItem): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("logo-item animated zoomIn").append(
      $("<div>").addClass("animated fadeIn slower").append(
        $("<img>").addClass("img-fluid hvr-fade").attr("src", `data:image/png;base64,${item.img}`).attr("alt", item.id)
          .on("click", () => events.onLogoItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default LogoItemComponent