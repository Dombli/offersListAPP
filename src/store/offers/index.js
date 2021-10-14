import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state () {
    return {
      offers: [
        {
          clientId: 'id1',
          id: '1',
          offertitle: 'Offer title',
          description: 'descriptiondescriptiondescriptiondescription'
        },
        {
          clientId: 'id1',
          id: '2',
          offertitle: 'Offer title2',
          description: 'desc2riptiondescri2ptiondescrip2tiondescription'
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}
