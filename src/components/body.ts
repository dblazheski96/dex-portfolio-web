import * as $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

import './body.css'
import { NavOpt } from '../models/navOpts'
import { ItemModel } from '../models/itemModel'
import Item from './item'

export default function(navOpt: NavOpt): JQuery<HTMLDivElement> {
  return (
    $("<div>").addClass("body container-fluid").append(
      $("<div>").addClass("row justify-content-center").append(
        items
          .filter(i => i.category === navOpt)
          .map(i => $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
            Item(i)
          )
        )
      )
    ) as JQuery<HTMLDivElement>
  )
}

const items: ItemModel[]  = [
  {
    title: "design item 1",
    category: NavOpt.Logos,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 2",
    category: NavOpt.Logos,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 3",
    category: NavOpt.Logos,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 4",
    category: NavOpt.Logos,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 5",
    category: NavOpt.Logos,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 6",
    category: NavOpt.Logos,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 7",
    category: NavOpt.SocialMedia,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 8",
    category: NavOpt.SocialMedia,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 9",
    category: NavOpt.SocialMedia,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 10",
    category: NavOpt.SocialMedia,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 11",
    category: NavOpt.Print,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 12",
    category: NavOpt.Print,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 13",
    category: NavOpt.Print,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
  {
    title: "design item 14",
    category: NavOpt.Print,
    img: "https://fetedugraphisme.org/wp-content/uploads/2018/10/graphic-design-1.jpg"
  },
]