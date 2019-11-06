import * as $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

export default function() {
  return (
    $("<div>").addClass("container-fluid").append(

      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-12").append(
          $("<div>").addClass("text-center text-uppercase animated bounce")
            .text("Dex")
        )
      ),
      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-12").append(
          $("<div>").addClass("text-center text-uppercase animated jello")
            .text("Graphics Designer")
        )
      ),
      $("<div>").addClass("row justify-content-center").append(
        $("<div>").addClass("col-12").append(
          $("<div>").addClass("text-center animated pulse infinite delay-2s")
            .text("=>")
        )
      )

    ) as JQuery<HTMLDivElement>
  )
}
