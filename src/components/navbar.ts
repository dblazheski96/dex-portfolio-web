import * as $ from 'jquery'

import './navbar.css'
import { NavOpt } from '../models/navOpts'
import App from '../app'

export default function(): JQuery<HTMLUListElement> {
  return (
    $("<ul>").addClass("navbar-style nav justify-content-center").append(
      $("<li>").addClass("nav-item").append(
        $("<div>").addClass("nav-style nav-link").text("LOGOS")
          .on("click", () => App(NavOpt.Logos)),
      ),
      $("<li>").addClass("nav-item").append(
        $("<div>").addClass("nav-style nav-link").text("EVENTS")
          .on("click", () => App(NavOpt.Events)),
      ),
      $("<li>").addClass("nav-item").append(
        $("<div>").addClass("nav-style nav-link").text("PRINT")
          .on("click", () => App(NavOpt.Print)),
      )
    ) as JQuery<HTMLUListElement>
  )
}
