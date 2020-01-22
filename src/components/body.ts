import * as $ from 'jquery'

import './body.css'
import { NavOpt } from '../models/navOpts'
import { ItemModel } from '../models/itemModel'
import Item from './item'
import ItemModal from './itemModal'

export default function(navOpt: NavOpt): JQuery<HTMLDivElement> {

  let currentItem: ItemModel = items[1]

  function setCurrentItem(item: ItemModel): void {
    currentItem = item
  }

  return (
    $("<div>").addClass("body container-fluid").append(
      $("<div>").addClass("row justify-content-center").append(
        items
          .filter(i => i.category === navOpt)
          .map(i => $("<div>").addClass("col-sm-9 col-lg-5 col-xl-4").append(
            Item(i, setCurrentItem)
          )
        )
      ),
      ItemModal(currentItem)
        .on("show.bs.modal", () => {
        //   $("#itemModalAnim").addClass("animated fadeIn")
          ItemModal(currentItem)
        })
        .on("hide.bs.modal", () => {
        //   $("#itemModalAnim").addClass("animated fadeOut")
        })
    ) as JQuery<HTMLDivElement>
  )
}

const items: Array<ItemModel>  = [
  {
    title: "esnaf",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/XiXpcju.jpg",
    imgPopup: "https://i.imgur.com/XiXpcju.jpg"
  } as ItemModel,
  {
    title: "startup-club-skopje",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/0VOnmlV.jpg",
    imgPopup: "https://i.imgur.com/0VOnmlV.jpg"
  } as ItemModel,
  {
    title: "uv-commerce",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/2lvRsPR.jpg",
    imgPopup: "https://i.imgur.com/2lvRsPR.jpg"
  } as ItemModel,
  {
    title: "hristina-design",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/lMbB6jm.jpg",
    imgPopup: "https://i.imgur.com/lMbB6jm.jpg"
  } as ItemModel,
  {
    title: "studentski-dom",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/ko33Xvk.jpg",
    imgPopup: "https://i.imgur.com/ko33Xvk.jpg"
  } as ItemModel,
  {
    title: "gradiste-2",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/60jfbb2.jpg",
    imgPopup: "https://i.imgur.com/60jfbb2.jpg"
  } as ItemModel,
  {
    title: "furbo",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/8X8g7y3.jpg",
    imgPopup: "https://i.imgur.com/8X8g7y3.jpg"
  } as ItemModel,
  {
    title: "konimex",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/NAy2MGW.jpg",
    imgPopup: "https://i.imgur.com/NAy2MGW.jpg"
  } as ItemModel,
  {
    title: "dex-logo",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/iLi3VXC.jpg",
    imgPopup: "https://i.imgur.com/iLi3VXC.jpg"
  } as ItemModel,
  {
    title: "connected",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/5kOZicG.jpg",
    imgPopup: "https://i.imgur.com/5kOZicG.jpg"
  } as ItemModel,
  {
    title: "the-missing-piece",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/FePwx9B.jpg",
    imgPopup: "https://i.imgur.com/FePwx9B.jpg"
  } as ItemModel,
  {
    title: "uk-on",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/2i6G4uz.jpg",
    imgPopup: "https://i.imgur.com/2i6G4uz.jpg"
  } as ItemModel,

  {
    title: "dzenan",
    category: NavOpt.Events,
    img: "https://i.imgur.com/n2liodb.jpg",
    imgPopup: "https://i.imgur.com/n2liodb.jpg"
  } as ItemModel,
  {
    title: "jala-brat",
    category: NavOpt.Events,
    img: "https://i.imgur.com/3yIGQCx.jpg",
    imgPopup: "https://i.imgur.com/3yIGQCx.jpg"
  } as ItemModel,
  {
    title: "thcf",
    category: NavOpt.Events,
    img: "https://i.imgur.com/QeE3aGr.jpg",
    imgPopup: "https://i.imgur.com/QeE3aGr.jpg"
  } as ItemModel,
  {
    title: "teodora",
    category: NavOpt.Events,
    img: "https://i.imgur.com/geUi7ol.png",
    imgPopup: "https://i.imgur.com/geUi7ol.png"
  } as ItemModel,
  {
    title: "natasa-bekvalac",
    category: NavOpt.Events,
    img: "https://i.imgur.com/cXemCdg.jpg",
    imgPopup: "https://i.imgur.com/cXemCdg.jpg"
  } as ItemModel,
  {
    title: "amar-gile",
    category: NavOpt.Events,
    img: "https://i.imgur.com/TeaAFDs.png",
    imgPopup: "https://i.imgur.com/TeaAFDs.png"
  } as ItemModel,
  {
    title: "mc-stojan",
    category: NavOpt.Events,
    img: "https://i.imgur.com/8sBb6os.jpg",
    imgPopup: "https://i.imgur.com/8sBb6os.jpg"
  } as ItemModel,
  {
    title: "bouble-b",
    category: NavOpt.Events,
    img: "https://i.imgur.com/KXXX2vn.jpg",
    imgPopup: "https://i.imgur.com/KXXX2vn.jpg"
  } as ItemModel,
  {
    title: "pedja",
    category: NavOpt.Events,
    img: "https://i.imgur.com/pvcpk2g.png",
    imgPopup: "https://i.imgur.com/pvcpk2g.png"
  } as ItemModel,
  {
    title: "otvaranje-esnaf",
    category: NavOpt.Events,
    img: "https://i.imgur.com/M6Q1gse.png",
    imgPopup: "https://i.imgur.com/M6Q1gse.png"
  } as ItemModel,
  {
    title: "eho-na-minatoto",
    category: NavOpt.Events,
    img: "https://i.imgur.com/ay4m87h.jpg",
    imgPopup: "https://i.imgur.com/ay4m87h.jpg"
  } as ItemModel,
  {
    title: "all-day-party",
    category: NavOpt.Events,
    img: "https://i.imgur.com/Mhnvnfh.jpg",
    imgPopup: "https://i.imgur.com/Mhnvnfh.jpg"
  } as ItemModel,
  
]