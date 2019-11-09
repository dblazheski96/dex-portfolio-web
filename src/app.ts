import * as $ from 'jquery'

import './app.css'
import { NavOpt } from './models/navOpts'
import Header from './components/header'
import Navbar from './components/navbar'
import Body from './components/body'

export default function(navOpt: NavOpt): void {
  $("#root").html("").append(
    Header(),
    Navbar(),
    Body(navOpt)
  )
}
