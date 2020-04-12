import * as $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './app.css'
import { NavOpt } from './models/nav-opt'
import store from './store/store'

import ItemPopupModal from './components/modal/item-popup-modal'
import ClientDetailsModal from './components/modal/client-details-modal'
import Loader from './components/loader/loader'

import Landing from './components/landing/landing'
import Header from './components/header/header'
import SideNavBar from './components/nav/side-nav-bar'
import Body from './components/body/body'


const App = async (): Promise<void> => {
  $("#root").html("").append(
    $("<div>").addClass("container-fluid").append(
      $("<div>").attr("id", "app").addClass("row justify-content-left")
    ),
    ItemPopupModal(),
    ClientDetailsModal(),
    Loader()
  )

  const $app = $("#app").html("")
  
  if (store.navOpt === NavOpt.Landing) {
    $app.append(
      Landing()
    )
  }
  else {
    $app.append(
      $("<div>").addClass("col-3").append(
        SideNavBar()
      )
    )
    $app.append(
      $("<div>").addClass("col-9").append(
        await Body()
      )
    )
  }
}

export default App