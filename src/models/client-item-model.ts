export type ClientItemDomain = {
  [id: string]: {
    title: string
    desc: string
    img: string
    orderIndex: number
  }
}

export type ClientPanelDomain = {
  [panelId: string]: {
    name: string
    orderIndex: number
    items: {
      [itemId: string]: {
        img: string
        imgPopup: string
        orderIndex: number
      }
    }
  }
}

export type PanelItem = {
  id: string
  img: string
  imgPopup: string
  orderIndex: number
}

export type ClientPanel = {
  id: string
  name: string
  orderIndex: number
  items: Array<PanelItem>
}

export type ClientItem = {
  id: string
  title: string
  desc: string
  img: string
  orderIndex: number
  panels?: Array<ClientPanel>
}