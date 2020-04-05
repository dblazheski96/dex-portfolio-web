import * as $ from 'jquery'

import store from '../../../store/store'
import ItemLogo from '../item/item-logo'

const LogosLayout = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    store.items
      .filter(item => item.category === store.navOpt)
      .map(item => ItemLogo(item))
  ) as JQuery<HTMLDivElement>

export default LogosLayout