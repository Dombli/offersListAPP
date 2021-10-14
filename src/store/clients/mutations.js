export default {
  registerClient (state, payload) {
    state.clients.push(payload)
  },
  removeClient (state, { id }) {
    const index = state.clients.findIndex(client => client.id === id)
    state.clients.splice(index, 1)
  },
  setClients (state, clients) {
    state.clients = clients
  }
}
