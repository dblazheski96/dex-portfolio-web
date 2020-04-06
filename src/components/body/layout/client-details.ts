import * as $ from 'jquery'

import store from '../../../store/store'
import ItemClientDetail from '../item/item-client-detail'

const ClientDetailLayout = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    
    $("<div>").addClass("col-3").append(
      $("<div>").addClass("container-fluid").append(
        $("<div>").addClass("row justify-content-center").append(
          $("<img>").addClass("img-fluid").attr("src", store.currentClientItem.img).attr("alt", store.currentClientItem.title)
        ),
        $("<div>").addClass("row justify-content-center").append(
          $("<div>").text(store.currentClientItem.desc)
        )
      )
    ),
    $("<div>").addClass("col-9").append(
      $("<div>").addClass("container-fluid").append(
        $("<div>").addClass("row justify-content-center").append(
          store.currentClientItem.clientDetailItems
          .map(item => ItemClientDetail(item))
        )
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientDetailLayout