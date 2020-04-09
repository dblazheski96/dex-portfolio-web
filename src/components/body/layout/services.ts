import * as $ from 'jquery'

import store from '../../../store/store'
import LogoItem from '../item/logo-item'

const ServicesLayout = (): JQuery<HTMLDivElement> =>
  $("<div>").addClass("row justify-content-center").append(
    // store.logoItems
    //   .map(item => LogoItem(item))
  ) as JQuery<HTMLDivElement>

export default ServicesLayout