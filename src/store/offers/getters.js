export default {
  offers (state) {
    return state.offers
  },
  hasOffers (state) {
    return state.offers && state.offers.length > 0
  }
}
