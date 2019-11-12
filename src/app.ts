import * as $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

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
