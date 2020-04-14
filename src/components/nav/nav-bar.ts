import * as $ from 'jquery'

import './nav-bar.css'
import { NavOpt } from '../../models/nav-opt'
import navItem from './nav-item'
import Header, { LetterSpacing } from '../header/header'

const NavBar = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("nav-bar sticky-top").append(
    $("<div>").addClass("nav-bar-header").append(
      Header(LetterSpacing.Tight)
    ),
    $("<ul>").addClass("nav-bar-ul nav justify-content-center").append(
      navItem(NavOpt.Logos, "LOGOS"),
      navItem(NavOpt.SocialMedia, "SOCIAL MEDIA")
    ) as JQuery<HTMLUListElement>
  ) as JQuery<HTMLDivElement>

export default NavBar
