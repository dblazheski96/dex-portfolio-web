import * as $ from 'jquery'

import './client-details.css'
import { ClientItem } from '../../../models/client-item-model'
import PanelItemComponent from '../item/panel-item'

const ClientDetailsLayout = (clientItem: ClientItem, onBackIconClick: () => void): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    
    $("<div>").addClass("container-fluid").append(
      $("<div>").addClass("row justify-content-left").append(
        $("<div>").addClass("icon text-center animated pulse infinite delay-2s")
          .html("<i class='fas fa-2x fa-angle-double-left'></i>")
          .on("click", onBackIconClick)
      ),
      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-10 col-lg-3").append(
          $("<div>").addClass("container-fluid").append(
            $("<div>").addClass("row justify-content-center").append(
              $("<div>").addClass("col-8").append(
                $("<img>").addClass("img-fluid").attr("src", `data:image/png;base64,${clientItem.img}`).attr("alt", clientItem.title)
              )
            ),
            $("<div>").addClass("row justify-content-center").append(
              $("<div>").addClass("col-8").append(
                $("<div>").addClass("client-details-title text-center").text(clientItem.title)
              )
            ),
            $("<div>").addClass("row justify-content-center").append(
              $("<div>").addClass("col-8").append(
                $("<div>").addClass("client-details-desc text-center").text(clientItem.desc)
              )
            )
          )
        ),
        $("<div>").addClass("col-9").append(
          clientItem.panels
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map(panel =>
              $("<div>").addClass("container-fluid").append(
                $("<div>").addClass("row justify-content-center").append(
                  $("<div>").addClass("col-11").append(
                    $("<div>").addClass("container-fluid").append(
                      $("<div>").addClass("row justify-content-center").append(
                        $("<div>").addClass("client-panel-parent col-12").append(
                          $("<div>").addClass("client-panel text-center").text(panel.name.toUpperCase())
                        )
                      ),
                      $("<div>").addClass("row justify-content-center").append(
                        panel.items
                          .sort((a, b) => a.orderIndex - b.orderIndex)
                          .map(item => PanelItemComponent(item))
                      )
                    )
                  )
                )
              )
          )
        )
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientDetailsLayout