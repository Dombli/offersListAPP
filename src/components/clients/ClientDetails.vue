<template>
  <section v-if="selectedClient">
    <base-card>
      <base-button
        link
        to="/clients"
      >
        Back to clients list
      </base-button>
      <h2> {{ fullName }}</h2>
      <h3> {{ companyName }}</h3>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      />
      <h4>
        {{ description }}
      </h4>
    </base-card>
    <base-card>
      <h1>
        Offers connected to <span style="color: #429EA6"> {{ fullName }} </span>
      </h1>
      <ul v-if="hasOffers">
        <offer-item
          v-for="offer in filteredOffers"
          :id="offer.id"
          :key="offer.id"
          :offertitle="offer.offertitle"
          :areas="offer.areas"
          :description="offer.description"
          :show-button="false"
        />
      </ul>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
import OfferItem from '../offers/OfferItem.vue'

export default {
  components: { BaseButton, OfferItem },
  // eslint-disable-next-line vue/require-prop-types
  props: ['id'],
  data () {
    return {
      selectedClient: null
    }
  },
  computed: {
    fullName () {
      return this.selectedClient.firstName + ' ' + this.selectedClient.lastName
    },
    areas () {
      return this.selectedClient.areas
    },
    description () {
      return this.selectedClient.description
    },
    companyName () {
      return this.selectedClient.companyName
    },
    hasOffers () {
      return this.$store.getters['offers/hasOffers']
    },
    // offers () {
    //   return this.$store.getters['offers/offers'].filter(offer => offer.clientId === this.id)
    // },
    filteredOffers () {
      return this.$store.getters['offers/offers']
    },
    clients () {
      return this.$store.getters['clients/clients']
    }
  },
  async created () {
    if (this.filteredOffers === null) {
      this.$store.dispatch('offers/getOffers')
    }
    if (this.clients === null) {
      await this.$store.dispatch('clients/getClients')
    }
    this.selectedClient = this.clients.find(client => client.id === this.id)
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
