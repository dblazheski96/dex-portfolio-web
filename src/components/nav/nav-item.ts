import * as $ from 'jquery'

import './nav-item.css'
import { NavOpt } from '../../models/nav-opt'
import store from '../../store/store'
import App from '../../app'

const helpers = {
  setActiveItem: (navOpt: NavOpt): string => {
    if (navOpt === store.navOpt)
      return "nav-item-active"
    return ""
  }
}

const events = {
  onItemClick: (navOpt: NavOpt): void => {
    store.navOpt = navOpt
    App()
  }
}

const NavItem = (navOpt: NavOpt, text: string): JQuery<HTMLLIElement> =>
  $("<li>").addClass(`nav-item col-12 ${helpers.setActiveItem(navOpt)}`).append(
    $("<div>").addClass("nav-style nav-link text-center").text(text.toUpperCase())
      .on("click", () => events.onItemClick(navOpt)),
  ) as JQuery<HTMLLIElement>

export default NavItem