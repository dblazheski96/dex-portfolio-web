import * as $ from 'jquery'

import './body.css'
import { NavOpt } from '../../models/nav-opt'
import store from '../../store/store'
import dataService from '../../services/dataService'

import LogosLayout from './layout/logos'
import ClientsLayout from './layout/clients'
import ServicesLayout from './layout/services'
import ItemPopupModal from './modal/item-popup-modal'
import ClientDetailsModal from './modal/client-details-modal'

const Body = async (): Promise<JQuery<HTMLDivElement>> => 
  $("<div>").addClass("body container-fluid").append(
    store.navOpt === NavOpt.Logos ? LogosLayout(await dataService.getLogos()) :
    store.navOpt === NavOpt.Clients ? ClientsLayout() :
    store.navOpt === NavOpt.Services ? ServicesLayout() :
    $("<div>").addClass("no-layout"),

    ItemPopupModal(),
    ClientDetailsModal()
  ) as JQuery<HTMLDivElement>

export default Body
