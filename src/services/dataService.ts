import db from '../services/firebase/firebaseDb'
import { LogoItemDomain, LogoItem } from '../models/logo-item-model'
import { ClientItemDomain, ClientItem, ClientPanel, ClientPanelDomain } from '../models/client-item-model'

const getLogos = async (): Promise<Array<LogoItem>> => {
  const sn = await db.child("logos").once("value")
  const logosData: LogoItemDomain = sn.val()
  const logosResult: Array<LogoItem> = []

  for (const logoKey in logosData) {
    if (logosData.hasOwnProperty(logoKey)) {
      const logo = logosData[logoKey]
      logosResult.push({
        id: logoKey,
        img: logo.img,
        imgPopup: logo.imgPopup,
        orderIndex: logo.orderIndex
      })
    }
  }

  return logosResult
}

const getClients = async (): Promise<Array<ClientItem>> => {
  const sn = await db.child("socialMedia").once("value")
  const clientsData: ClientItemDomain = sn.val()
  const clientsResult: Array<ClientItem> = []

  for (const clientKey in clientsData) {
    if (clientsData.hasOwnProperty(clientKey)) {
      const client = clientsData[clientKey]
      clientsResult.push({
        id: clientKey,
        title: client.title,
        desc: client.desc,
        img: client.img,
        orderIndex: client.orderIndex
      })
    }
  }

  return clientsResult
}

const getClientPanels = async (clientId: string): Promise<Array<ClientPanel>> => {
  const sn = await db.child(`panels/${clientId}`).once("value")
  const clientPanelsData: ClientPanelDomain = sn.val()
  const clientPanelsResult: Array<ClientPanel> = []

  for (const panelKey in clientPanelsData) {
    if (clientPanelsData.hasOwnProperty(panelKey)) {
      const panel = clientPanelsData[panelKey]
      const clientPanel: ClientPanel = {
        id: panelKey,
        name: panel.name,
        orderIndex: panel.orderIndex,
        items: []
      }

      for (const itemKey in panel.items) {
        if (panel.items.hasOwnProperty(itemKey)) {
          const item = panel.items[itemKey];
          clientPanel.items.push({
            id: itemKey,
            img: item.img,
            imgPopup: item.imgPopup,
            orderIndex: item.orderIndex
          })
        }
      }

      clientPanelsResult.push(clientPanel)
    }
  }

  return clientPanelsResult
}

const dataService = {
  getLogos,
  getClients,
  getClientPanels
}

export default dataService