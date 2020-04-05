import * as $ from 'jquery'

import { NavOpt } from '../../models/nav-opt'
import store from '../../store/store'
import App from '../../app'

const events = {
  onItemClick: (navOpt: NavOpt) => {
    store.navOpt = navOpt
    App()
  }
}

const NavItem = (navOpt: NavOpt, text: string): JQuery<HTMLLIElement> =>
  $("<li>").addClass("nav-item").append(
    $("<div>").addClass("nav-style nav-link").text(text.toUpperCase())
      .on("click", () => events.onItemClick(navOpt)),
  ) as JQuery<HTMLLIElement>

export default NavItem