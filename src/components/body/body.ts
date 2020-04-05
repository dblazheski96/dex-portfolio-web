import * as $ from 'jquery'

import './body.css'
import { NavOpt } from '../../models/nav-opt'
import { ItemModel } from '../../models/item-model'
import store from '../../store/store'
import LogosLayout from './layout/logos'
import ClientsLayout from './layout/clients'
import ServicesLayout from './layout/services'
import ItemModal from './item/item-modal'

const Body = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("body container-fluid").append(
    store.navOpt === NavOpt.Logos ? LogosLayout() :
    store.navOpt === NavOpt.Clients ? ClientsLayout() :
    store.navOpt === NavOpt.Services ? ServicesLayout() :
    $("<div>").addClass("no-layout"),

    ItemModal()
  ) as JQuery<HTMLDivElement>

Body.events = {
  onItemClick: (item: ItemModel) => {
    store.currentItem = item
    $("#itemModal").modal('toggle')
  }
}

export default Body
