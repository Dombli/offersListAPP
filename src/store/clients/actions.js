export default {
  registerClient (context, data) {
    const clientData = {
      id: 'id1',
      firstName: data.first,
      lastName: data.last,
      companyName: data.company,
      areas: data.areas,
      description: data.description
    }
    context.commit('registerClient', clientData)
  },
  removeClient (context, id) {
    context.commit('removeClient', { id })
  }
}
