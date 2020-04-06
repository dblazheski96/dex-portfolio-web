import * as $ from 'jquery'

import store from '../../../store/store'
import LogoItem from '../item/logo-item'

const LogosLayout = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    $("<div>").addClass("col-9").append(
      $("<div>").addClass("container-fluid").append(
        $("<div>").addClass("row justify-content-center").append(
          store.logoItems
            .map(item => LogoItem(item))
        )
      )
    )
  ) as JQuery<HTMLDivElement>

export default LogosLayout