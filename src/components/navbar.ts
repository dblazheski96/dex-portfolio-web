import * as $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

import { NavOpt } from '../models/navOpts'
import App from '../app'

export default function(): JQuery<HTMLUListElement> {
  return (
    $("<ul>").addClass("nav justify-content-center").append(
      $("<li>").addClass("nav-item").append(
        $("<button>").addClass("btn nav-link").text("LOGOS")
          .on("click", () => App(NavOpt.Logos)),
      ),
      $("<li>").addClass("nav-item").append(
        $("<button>").addClass("btn nav-link").text("SOCIAL MEDIA")
          .on("click", () => App(NavOpt.SocialMedia)),
      ),
      $("<li>").addClass("nav-item").append(
        $("<button>").addClass("btn nav-link").text("PRINT")
          .on("click", () => App(NavOpt.Print)),
      )
    ) as JQuery<HTMLUListElement>
  )
}
