import * as $ from 'jquery'

import './body.css'
import { NavOpt } from '../../models/nav-opt'
import store from '../../store/store'
import Loader from '../loader/loader'
import dataService from '../../services/dataService'

import LogosLayout from './layout/logos'
import ClientsLayout from './layout/clients'

const Body = async (): Promise<JQuery<HTMLDivElement>> => {
  Loader.showLoader()
  const $bodyContent = 
    store.navOpt === NavOpt.Logos ? LogosLayout(await dataService.getLogos()) :
    store.navOpt === NavOpt.SocialMedia ? ClientsLayout(await dataService.getClients()) :
    $("<div>").addClass("no-layout")
  Loader.hideLoader()

  return $("<div>").addClass("body container-fluid").append(
    $bodyContent
  ) as JQuery<HTMLDivElement>
}
  

export default Body
