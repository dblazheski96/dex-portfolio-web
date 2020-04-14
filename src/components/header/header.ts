import * as $ from 'jquery'

import './header.css'
import title from '../../assets/title.svg'

export enum LetterSpacing {
  Tight,
  Wide
}

const helpers = {
  setCareerSpacing: (letterSpacing: LetterSpacing) => {
    switch(letterSpacing) {
      case LetterSpacing.Tight:
        return "carrer-tight"
      case LetterSpacing.Wide:
        return "career-wide"
      default:
        return "career-wide"
    }
  }
}

const Header = (letterSpacing: LetterSpacing): JQuery<HTMLDivElement> => 
  $("<div>").addClass("header container-fluid").append(

    $("<div>").addClass("row justify-content-center").append(
      $("<div>").addClass("col-12").append(
        $("<div>").addClass("title text-center text-uppercase animated bounce")
          .html(title)
      )
    ),
    $("<div>").addClass("row justify-content-center").append(
      $("<div>").addClass("col-12").append(
        $("<div>").addClass(`career ${helpers.setCareerSpacing(letterSpacing)} text-center text-uppercase animated jello`)
          .text("Graphic Designer")
      )
    ),
    $("<div>").addClass("row justify-content-center").append(
      $("<div>").addClass("col-12").append(
        $("<div>").addClass("icon text-center animated pulse infinite delay-2s")
          .html("<i class='fas fa-caret-down'></i>")
      )
    )
  ) as JQuery<HTMLDivElement>

export default Header