import * as $ from 'jquery'

import './loader.css'

const Loader = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("modal animated")
  .attr("id", "loader")
  .attr("tabindex", "-1")
  .attr("role", "dialog")
  .append(
    $("<div>").addClass("container-fluid").append(
      $("<div>").addClass("loader spinner-grow text-warning")
    )
  ) as JQuery<HTMLDivElement>

Loader.showLoader = () => {
  $("#loader").modal("show")
},
Loader.hideLoader = () => {
  $("#loader").modal("hide")
}

export default Loader