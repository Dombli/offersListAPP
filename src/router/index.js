import { createRouter, createWebHistory } from 'vue-router'
import Clients from '@/pages/ClientsList'
import OffersList from '@/pages/OffersList'
import ClientDetails from '@/components/clients/ClientDetails'

const routes = [
  {
    path: '/',
    redirect: '/offerslist'
  },
  {
    path: '/offerslist',
    component: OffersList
  },
  {
    path: '/clients',
    component: Clients
  },
  {
    path: '/clients/:id',
    component: ClientDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
