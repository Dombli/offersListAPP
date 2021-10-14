<template>
  <div>
    <section id="">
      <div class="controls">
        <base-card>
          <the-registration />
        </base-card>
      </div>
      <div>
        <base-card>
          <ul v-if="hasOffers">
            <offer-item
              v-for="offer in filteredOffers"
              :id="offer.id"
              :key="offer.id"
              :offertitle="offer.offertitle"
              :description="offer.description"
              :client-id="offer.clientId"
              :show-button="true"
            />
          </ul>
          <h3 v-else>
            No offers found.
          </h3>
        </base-card>
      </div>
    </section>
  </div>
</template>

<script>
import TheRegistration from '@/components/TheRegistration.vue'
import OfferItem from '@/components/offers/OfferItem.vue'
export default {
  components: {
    TheRegistration,
    OfferItem
  },
  computed: {
    filteredOffers () {
      return this.$store.getters['offers/offers']
    },
    hasOffers () {
      return this.$store.getters['offers/hasOffers']
    },
    clients () {
      return this.$store.getters['clients/clients']
    }
  },
  created () {
    if (this.filteredOffers === null) {
      this.$store.dispatch('offers/getOffers')
    }
    if (this.clients === null) {
      this.$store.dispatch('clients/getClients')
    }
  }
}
</script>

<style lang="scss" scoped>

.controls {
  position: relative;
  bottom: 4rem;
  //display: flex;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
