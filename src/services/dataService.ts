import db from '../services/firebase/firebaseDb'
import { LogoItemDomain, LogoItem } from '../models/logo-item-model'

const getLogos = async (): Promise<Array<LogoItem>> => {
  const sn = await db.child("logos").once("value")
  const logosData: LogoItemDomain = sn.val()
  const logosResult: Array<LogoItem> = []

  for (const logoKey in logosData) {
    if (logosData.hasOwnProperty(logoKey)) {
      const logo = logosData[logoKey];
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

const dataService = {
  getLogos
}

export default dataService