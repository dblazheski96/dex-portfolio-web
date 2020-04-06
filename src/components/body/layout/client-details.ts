import * as $ from 'jquery'

import store from '../../../store/store'
import ClientPanelItem from '../item/client-panel-item'

const ClientDetailsLayout = (onBackIconClick: () => void): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    
    $("<div>").addClass("col-3").append(
      $("<div>").addClass("container-fluid").append(
        $("<div>").addClass("row justify-content-left").append(
          $("<div>").addClass("icon text-center animated pulse infinite delay-2s")
            .html("<i class='fas fa-2x fa-angle-double-left'></i>")
            .on("click", onBackIconClick)
        ),
        $("<div>").addClass("row justify-content-center").append(
          $("<img>").addClass("img-fluid").attr("src", store.currentClientItem.img).attr("alt", store.currentClientItem.title)
        ),
        $("<div>").addClass("row justify-content-center").append(
          $("<div>").text(store.currentClientItem.clientDetails.desc)
        )
      )
    ),
    $("<div>").addClass("col-9").append(
      store.currentClientItem.clientDetails.panels.map(panel =>
        $("<div>").addClass("container-fluid").append(
          $("<div>").addClass("row justify-content-center").append(
            $("<div>").addClass("col-12").append(
              $("<div>").addClass("alert alert-info text-center").text(panel.name)
            )
          ),
          $("<div>").addClass("row justify-content-center").append(
            panel.panelItems.map(item => ClientPanelItem(item))
          )
        )
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientDetailsLayout