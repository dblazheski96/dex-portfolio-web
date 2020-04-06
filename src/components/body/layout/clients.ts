import * as $ from 'jquery'

import store from '../../../store/store'
import ItemClient from '../item/item-client'

const ClientsLayout = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    store.clientItems
      .map(item => ItemClient(item))
  ) as JQuery<HTMLDivElement>

export default ClientsLayout