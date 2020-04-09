import * as $ from 'jquery'

import './nav-bar.css'
import { NavOpt } from '../../models/nav-opt'
import navItem from './nav-item'

const NavBar = (): JQuery<HTMLUListElement> =>
  $("<ul>").addClass("navbar-style nav justify-content-center").append(
    navItem(NavOpt.Logos, "LOGOS"),
    navItem(NavOpt.Clients, "CLIENTS"),
    // navItem(NavOpt.Services, "SERVICES(coming soon)")
  ) as JQuery<HTMLUListElement>

export default NavBar
