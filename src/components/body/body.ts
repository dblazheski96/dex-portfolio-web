import * as $ from 'jquery'

import './body.css'
import { NavOpt } from '../../models/nav-opt'
import store from '../../store/store'
import LogosLayout from './layout/logos'
import ClientsLayout from './layout/clients'
import ServicesLayout from './layout/services'
import ItemModal from './modal/item-modal'
import ClientDetailsModal from './modal/client-details-modal'

const Body = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("body container-fluid").append(
    store.navOpt === NavOpt.Logos ? LogosLayout() :
    store.navOpt === NavOpt.Clients ? ClientsLayout() :
    store.navOpt === NavOpt.Services ? ServicesLayout() :
    $("<div>").addClass("no-layout"),

    ItemModal(),
    ClientDetailsModal()
  ) as JQuery<HTMLDivElement>

export default Body
