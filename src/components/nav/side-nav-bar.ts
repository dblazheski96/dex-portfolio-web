import * as $ from 'jquery'

import './side-nav-bar.css'
import { NavOpt } from '../../models/nav-opt'
import navItem from './nav-item'
import Header from '../header/header'

const SideNavBar = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("side-navbar sticky-top").append(
    $("<div>").addClass("side-navbar-header").append(
      Header()
    ),
    $("<ul>").addClass("side-navbar-ul nav justify-content-center").append(
      navItem(NavOpt.Logos, "LOGOS"),
      navItem(NavOpt.SocialMedia, "SOCIAL MEDIA"),
      // navItem(NavOpt.Services, "SERVICES(coming soon)")
    ) as JQuery<HTMLUListElement>
  ) as JQuery<HTMLDivElement>

export default SideNavBar
