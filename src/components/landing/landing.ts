import * as $ from 'jquery'

import './landing.css'
import { NavOpt } from '../../models/nav-opt'
import Header from '../header/header'
import NavItem from '../nav/nav-item'

const Landing = (): JQuery<HTMLDivElement> => 
  $("<div>").addClass("container-fluid").append(
    $("<div>").addClass("row justify-content-center").append(
      $("<div>").addClass("col-8 landing-header").append(
        Header()
      )
    ),
    $("<div>").addClass("row justify-content-center").append(
      NavItem(NavOpt.SocialMedia, "Click here to continue")
    )
  ) as JQuery<HTMLDivElement>

export default Landing