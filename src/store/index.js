import { createStore } from 'vuex'
import clientsModule from './clients/index.js'
import offersModule from './offers/index.js'

const store = createStore({
  modules: {
    clients: clientsModule,
    offers: offersModule
  }
})

export default store
