import dbRef from './firebaseDb'
import { initialData } from './initialData'

const initializeDb = () => {
  initialData.logos.forEach(logo => {
    const logoKey = dbRef.child("logos").push({
      img: logo.img,
      imgPopup: logo.imgPopup,
      orderIndex: logo.orderIndex
    }).key
  })

  initialData.socialMedia.forEach(client => {
    const clientKey = dbRef.child("socialMedia").push({
      title: client.title,
      desc: client.desc,
      img: client.img,
      orderIndex: client.orderIndex
    }).key

    client.panels.forEach(panel => {
      const panelKey = dbRef.child(`panels/${clientKey}`).push({
        name: panel.name,
        orderIndex: panel.orderIndex
      }).key
      
      panel.items.forEach(panelItem => {
        const panelItemKey = dbRef.child(`panels/${clientKey}/${panelKey}/items`).push({
          img: panelItem.img,
          imgPopup: panelItem.imgPopup,
          orderIndex: panelItem.orderIndex
        }).key
      })
    })
  })
}

export default initializeDb