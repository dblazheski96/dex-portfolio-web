import { NavOpt } from '../models/nav-opt'
import { ItemModel } from '../models/item-model'
import { ItemClientModel } from '../models/item-client-model'
import { ItemClientDetailsModel } from '../models/item-client-details-model'
import { ClientPanelModel } from '../models/client-panel-model'

export const logoItems: Array<ItemModel> = [
  {
    id: 1,
    title: "esnaf",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/XiXpcju.jpg",
    imgPopup: "https://i.imgur.com/XiXpcju.jpg"
  } as ItemModel,
  {
    id: 2,
    title: "startup-club-skopje",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/0VOnmlV.jpg",
    imgPopup: "https://i.imgur.com/0VOnmlV.jpg"
  } as ItemModel,
  {
    id: 3,
    title: "uv-commerce",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/2lvRsPR.jpg",
    imgPopup: "https://i.imgur.com/2lvRsPR.jpg"
  } as ItemModel,
  {
    id: 4,
    title: "hristina-design",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/lMbB6jm.jpg",
    imgPopup: "https://i.imgur.com/lMbB6jm.jpg"
  } as ItemModel,
  {
    id: 5,
    title: "studentski-dom",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/ko33Xvk.jpg",
    imgPopup: "https://i.imgur.com/ko33Xvk.jpg"
  } as ItemModel,
  {
    id: 6,
    title: "gradiste-2",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/60jfbb2.jpg",
    imgPopup: "https://i.imgur.com/60jfbb2.jpg"
  } as ItemModel,
  {
    id: 7,
    title: "furbo",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/8X8g7y3.jpg",
    imgPopup: "https://i.imgur.com/8X8g7y3.jpg"
  } as ItemModel,
  {
    id: 8,
    title: "konimex",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/NAy2MGW.jpg",
    imgPopup: "https://i.imgur.com/NAy2MGW.jpg"
  } as ItemModel,
  {
    id: 9,
    title: "dex-logo",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/iLi3VXC.jpg",
    imgPopup: "https://i.imgur.com/iLi3VXC.jpg"
  } as ItemModel,
  {
    id: 10,
    title: "connected",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/5kOZicG.jpg",
    imgPopup: "https://i.imgur.com/5kOZicG.jpg"
  } as ItemModel,
  {
    id: 11,
    title: "the-missing-piece",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/FePwx9B.jpg",
    imgPopup: "https://i.imgur.com/FePwx9B.jpg"
  } as ItemModel,
  {
    id: 12,
    title: "uk-on",
    category: NavOpt.Logos,
    img: "https://i.imgur.com/2i6G4uz.jpg",
    imgPopup: "https://i.imgur.com/2i6G4uz.jpg"
  } as ItemModel
]



export const clientPanels: Array<ClientPanelModel> = [
  {
    id: 1,
    name: "Panel 1",
    panelItems: logoItems.filter(logo => logo.id <= 6)
  } as ClientPanelModel,
  {
    id: 2,
    name: "Panel 2",
    panelItems: logoItems.filter(logo => logo.id > 3 && logo.id <= 9)
  } as ClientPanelModel,
  {
    id: 3,
    name: "Panel 3",
    panelItems: logoItems.filter(logo => logo.id > 4)
  } as ClientPanelModel,
  {
    id: 4,
    name: "Panel 4",
    panelItems: logoItems.filter(logo => logo.id > 1)
  } as ClientPanelModel,
  {
    id: 5,
    name: "Panel 5",
    panelItems: logoItems.filter(logo => logo.id < 8)
  } as ClientPanelModel
]



export const clientDetailsItems: Array<ItemClientDetailsModel> = [
  {
    id: 1,
    desc: "desc 1",
    panels: clientPanels.filter(panel => panel.id < 3)
  } as ItemClientDetailsModel,
  {
    id: 2,
    desc: "desc 2",
    panels: clientPanels.filter(panel => panel.id >= 2)
  } as ItemClientDetailsModel,
  {
    id: 3,
    desc: "desc 3",
    panels: clientPanels.filter(panel => panel.id === 3)
  } as ItemClientDetailsModel,
  {
    id: 4,
    desc: "desc 4",
    panels: clientPanels.filter(panel => panel.id < 4)
  } as ItemClientDetailsModel,
  {
    id: 5,
    desc: "desc 5",
    panels: clientPanels.filter(panel => panel.id === 2)
  } as ItemClientDetailsModel,
  {
    id: 6,
    desc: "desc 6",
    panels: clientPanels.filter(panel => panel.id < 3)
  } as ItemClientDetailsModel
]



export const clientItems: Array<ItemClientModel> = [
  {
    id: 1,
    title: "Client Item 1",
    img: "https://i.imgur.com/ko33Xvk.jpg",
    clientDetails: clientDetailsItems[0]
  } as ItemClientModel,
  {
    id: 2,
    title: "Client Item 2",
    img: "https://i.imgur.com/iLi3VXC.jpg",
    clientDetails: clientDetailsItems[1]
  } as ItemClientModel,
  {
    id: 3,
    title: "Client Item 3",
    img: "https://i.imgur.com/NAy2MGW.jpg",
    clientDetails: clientDetailsItems[2]
  } as ItemClientModel,
  {
    id: 4,
    title: "Client Item 4",
    img: "https://i.imgur.com/8X8g7y3.jpg",
    clientDetails: clientDetailsItems[3]
  } as ItemClientModel,
  {
    id: 5,
    title: "Client Item 5",
    img: "https://i.imgur.com/2i6G4uz.jpg",
    clientDetails: clientDetailsItems[4]
  } as ItemClientModel,
  {
    id: 6,
    title: "Client Item 6",
    img: "https://i.imgur.com/FePwx9B.jpg",
    clientDetails: clientDetailsItems[5]
  } as ItemClientModel
]



export const printItems: Array<ItemModel> = [
    // {
  //   title: "vedrina-i-srekja",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/br5RMpF.jpg",
  //   imgPopup: "https://i.imgur.com/br5RMpF.jpg"
  // } as ItemModel,
  // {
  //   title: "104m-komfor",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/7YQccar.jpg",
  //   imgPopup: "https://i.imgur.com/7YQccar.jpg"
  // } as ItemModel,
  // {
  //   title: "dds-building",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/RLAvv1o.jpg",
  //   imgPopup: "https://i.imgur.com/RLAvv1o.jpg"
  // } as ItemModel,
  // {
  //   title: "wedding",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/4QD8b2m.png",
  //   imgPopup: "https://i.imgur.com/4QD8b2m.png"
  // } as ItemModel,
  // {
  //   title: "winter-2019-challange",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/aDdzrR7.jpg",
  //   imgPopup: "https://i.imgur.com/aDdzrR7.jpg"
  // } as ItemModel,
  // {
  //   title: "honeymoon",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/eAmR0KW.png",
  //   imgPopup: "https://i.imgur.com/eAmR0KW.png"
  // } as ItemModel,
  // {
  //   title: "eho",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/hoNtaMC.jpg",
  //   imgPopup: "https://i.imgur.com/hoNtaMC.jpg"
  // } as ItemModel,
  // {
  //   title: "esnaf-",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/7QWABiS.jpg",
  //   imgPopup: "https://i.imgur.com/7QWABiS.jpg"
  // } as ItemModel,
  // {
  //   title: "50m-ljubov",
  //   category: NavOpt.Print,
  //   img: "https://i.imgur.com/CBmBY4A.jpg",
  //   imgPopup: "https://i.imgur.com/CBmBY4A.jpg"
  // } as ItemModel
]

export const socialMediaItems: Array<ItemModel> = [
    // {
  //   title: "dzenan",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/n2liodb.jpg",
  //   imgPopup: "https://i.imgur.com/n2liodb.jpg"
  // } as ItemModel,
  // {
  //   title: "jala-brat",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/3yIGQCx.jpg",
  //   imgPopup: "https://i.imgur.com/3yIGQCx.jpg"
  // } as ItemModel,
  // {
  //   title: "thcf",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/QeE3aGr.jpg",
  //   imgPopup: "https://i.imgur.com/QeE3aGr.jpg"
  // } as ItemModel,
  // {
  //   title: "teodora",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/geUi7ol.png",
  //   imgPopup: "https://i.imgur.com/geUi7ol.png"
  // } as ItemModel,
  // {
  //   title: "natasa-bekvalac",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/cXemCdg.jpg",
  //   imgPopup: "https://i.imgur.com/cXemCdg.jpg"
  // } as ItemModel,
  // {
  //   title: "amar-gile",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/TeaAFDs.png",
  //   imgPopup: "https://i.imgur.com/TeaAFDs.png"
  // } as ItemModel,

  // {
  //   title: "mc-stojan",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/8sBb6os.jpg",
  //   imgPopup: "https://i.imgur.com/8sBb6os.jpg"
  // } as ItemModel,
  // {
  //   title: "bouble-b",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/KXXX2vn.jpg",
  //   imgPopup: "https://i.imgur.com/KXXX2vn.jpg"
  // } as ItemModel,
  // {
  //   title: "pedja",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/pvcpk2g.png",
  //   imgPopup: "https://i.imgur.com/pvcpk2g.png"
  // } as ItemModel,
  // {
  //   title: "otvaranje-esnaf",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/M6Q1gse.png",
  //   imgPopup: "https://i.imgur.com/M6Q1gse.png"
  // } as ItemModel,
  // {
  //   title: "eho-na-minatoto",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/ay4m87h.jpg",
  //   imgPopup: "https://i.imgur.com/ay4m87h.jpg"
  // } as ItemModel,
  // {
  //   title: "all-day-party",
  //   category: NavOpt.Clients,
  //   img: "https://i.imgur.com/Mhnvnfh.jpg",
  //   imgPopup: "https://i.imgur.com/Mhnvnfh.jpg"
  // } as ItemModel,
]