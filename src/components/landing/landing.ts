import * as $ from 'jquery'

import './landing.css'
import { NavOpt } from '../../models/nav-opt'
import store from '../../store/store'
import App from '../../app'
import Header, { LetterSpacing } from '../header/header'

const events = {
  onLandingClick: () => {
    store.navOpt = NavOpt.SocialMedia
    App()
  }
}

const Landing = (): JQuery<HTMLDivElement> => 
  $("<div>").addClass("landing-page container-fluid").append(
    $("<div>").addClass("row justify-content-center").append(
      $("<div>").addClass("col-12 landing-header").append(
        Header(LetterSpacing.Wide)
      )
    ),
    $("<div>").addClass("click-to-continue row justify-content-center").append(
      $("<div>").addClass("landing-text").text("NEXT")
    )
  ).on("click", events.onLandingClick) as JQuery<HTMLDivElement>

export default Landing