import * as $ from 'jquery'

import { LogoItem } from '../../../models/logo-item-model'
import LogoItemComponent from '../item/logo-item'

const LogosLayout = (logoItems: Array<LogoItem>): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    $("<div>").addClass("col-9").append(
      $("<div>").addClass("container-fluid").append(
        $("<div>").addClass("row justify-content-center").append(
          logoItems
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map(logo => LogoItemComponent(logo))
        )
      )
    )
  ) as JQuery<HTMLDivElement>

export default LogosLayout