import * as $ from 'jquery'

import './item-client.css'
import { ItemModel } from '../../../models/item-model'
import Body from '../body'

const ItemClient = (item: ItemModel): JQuery<HTMLDivElement> =>
  $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
    $("<div>").addClass("item-client animated zoomIn delay-1s").append(
      $("<div>").addClass("animated fadeIn delay-1s slower").append(
        $("<img>").addClass("img-fluid").attr("src", item.img).attr("alt", item.title)
          .on("click", () => Body.events.onItemClick(item))
      )
    )
  ) as JQuery<HTMLDivElement>

export default ItemClient