import * as $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './app.css'
import Header from './components/header/header'
import Navbar from './components/nav/nav-bar'
import Body from './components/body/body'

const App = (): void => {
  $("#root").html("").append(
    Header(),
    Navbar(),
    Body()
  )
}

export default App