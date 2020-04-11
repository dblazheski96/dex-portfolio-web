import * as $ from 'jquery'

import './logo-item.css'
import { LogoItem } from '../../../models/logo-item-model'
import store from '../../../store/store'

const events = {
  onLogoItemClick: (logoItem: LogoItem) => {
    store.itemModalCurrentItem = { id: logoItem.id, img: logoItem.imgPopup }
    $("#item-popup-modal").modal("show")
  }
}

const LogoItemComponent = (item: LogoItem): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("logo-item animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", `data:image/png;base64,${item.img}`).attr("alt", item.id)
          .on("click", () => events.onLogoItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default LogoItemComponent