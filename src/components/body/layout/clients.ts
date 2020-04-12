import * as $ from 'jquery'

import { ClientItem } from '../../../models/client-item-model'
import ClientItemComponent from '../item/client-item'

const ClientsLayout = (clientItems: Array<ClientItem>): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    $("<div>").addClass("col-9").append(
      $("<div>").addClass("container-fluid").append(
        $("<div>").addClass("row justify-content-center").append(
          clientItems
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map(client => ClientItemComponent(client))
        )
      )
    )
  ) as JQuery<HTMLDivElement>

export default ClientsLayout