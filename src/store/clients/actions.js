import { getFirestore, getDocs, addDoc, deleteDoc, doc, collection } from 'firebase/firestore'

export default {
  async getClients (context) {
    try {
      const result = await getDocs(collection(getFirestore(), 'clients'))
      const clients = result.docs.map(client => ({ id: client.id, ...client.data() }))
      context.commit('setClients', clients)
    } catch (e) {
      console.error('Could not load clients', e)
    }
  },
  async registerClient (context, data) {
    const clientData = {
      firstName: data.first,
      lastName: data.last,
      companyName: data.company,
      areas: data.areas,
      description: data.description
    }
    try {
      const result = await addDoc(collection(getFirestore(), 'clients'), clientData)
      context.commit('registerClient', { id: result.id, ...clientData })
    } catch (e) {
      console.error('Could not register client', e)
    }
  },
  async removeClient (context, id) {
    try {
      await deleteDoc(doc(getFirestore(), 'clients', id))
      context.commit('removeClient', { id })
    } catch (e) {
      console.error('Could not delete client', e)
    }
  }
}
