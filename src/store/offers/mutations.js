export default {
  registerOffer (state, payload) {
    state.offers.push(payload)
  },
  removeOffer (state, { id }) {
    const index = state.offers.findIndex(offer => offer.id === id)
    state.offers.splice(index, 1)
  },
  setOffers (state, offers) {
    state.offers = offers
  }
}
