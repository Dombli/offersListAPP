import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import BaseCard from './components/base/BaseCard.vue'
import BaseButton from './components/base/BaseButton.vue'
import BaseBadge from './components/base/BaseBadge.vue'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA2LhLGatID9NsCXcySfYnCZXc3It_r2U8',
  authDomain: 'client-list-app-4d0c3.firebaseapp.com',
  projectId: 'client-list-app-4d0c3',
  storageBucket: 'client-list-app-4d0c3.appspot.com',
  messagingSenderId: '460403291453',
  appId: '1:460403291453:web:d768d39d5efdc561814154'
}
initializeApp(firebaseConfig)

createApp(App)
  .use(router)
  .use(store)
  .component('BaseBadge', BaseBadge)
  .component('BaseCard', BaseCard)
  .component('BaseButton', BaseButton)
  .mount('#app')
