import * as $ from 'jquery'

import './header.css'
import titleSvg from '../assets/titleSvg'

export default function(): JQuery<HTMLDivElement> {
  return (
    $("<div>").addClass("header container-fluid").append(

      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-8").append(
          $("<div>").addClass("title text-center text-uppercase animated bounce")
            .html(titleSvg)
        )
      ),
      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-8").append(
          $("<div>").addClass("career text-center text-uppercase animated jello")
            .text("Graphics Designer")
        )
      ),
      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-8").append(
          $("<div>").addClass("icon text-center animated pulse infinite delay-2s")
            .html("<i class='fas fa-caret-down'></i>")
        )
      )
    ) as JQuery<HTMLDivElement>
  )
}
