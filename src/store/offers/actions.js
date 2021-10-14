export default {
  registerOffer (context, data) {
    const offerData = {
      clientId: 'id1',
      id: '1',
      offertitle: data.title,
      description: data.description
    }
    context.commit('registerOffer', offerData)
  },
  removeOffer (context, id) {
    context.commit('removeOffer', { id })
  }
}
