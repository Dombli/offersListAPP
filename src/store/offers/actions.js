import { getFirestore, getDocs, deleteDoc, doc, addDoc, collection } from 'firebase/firestore'

export default {
  async getOffers (context) {
    try {
      const result = await getDocs(collection(getFirestore(), 'offers'))
      const offers = result.docs.map(offer => ({ id: offer.id, ...offer.data() }))
      context.commit('setOffers', offers)
    } catch (e) {
      console.error('Could not load offers', e)
    }
  },
  async registerOffer (context, data) {
    const offerData = {
      clientId: data.clientId,
      offertitle: data.title,
      description: data.description
    }
    try {
      const result = await addDoc(collection(getFirestore(), 'offers'), offerData)
      context.commit('registerOffer', { id: result.id, ...offerData })
    } catch (e) {
      console.error('Cannot register offer', e)
    }
  },
  async removeOffer (context, id) {
    try {
      await deleteDoc(doc(getFirestore(), 'offers', id))
      context.commit('removeOffer', id)
    } catch (e) {
      console.error('Cannot remove offer', e)
    }
  },
  removeClientOffers (context, ids) {
    ids.forEach(async id => {
      try {
        await deleteDoc(doc(getFirestore(), 'offers', id))
        context.commit('removeOffer', id)
      } catch (e) {
        console.error('Cannot remove offer', e)
      }
    })
  }
}
