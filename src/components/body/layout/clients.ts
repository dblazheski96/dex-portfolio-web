import * as $ from 'jquery'

import store from '../../../store/store'
import ClientItem from '../item/client-item'

const ClientsLayout = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    store.clientItems
      .map(item => ClientItem(item))
  ) as JQuery<HTMLDivElement>

export default ClientsLayout