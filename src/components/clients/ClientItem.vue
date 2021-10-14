
<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ companyName }}</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
      >
        {{ area }}
      </base-badge>
    </div>
    <div class="actions">
      <base-button @click="removeClient(id)">
        Delete
      </base-button>
      <base-button
        link
        :to="clientLink"
      >
        Show Details
      </base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  components: { BaseButton },
  // eslint-disable-next-line vue/require-prop-types
  props: ['id', 'firstName', 'lastName', 'companyName', 'description', 'areas'],
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    },
    clientLink () {
      return this.$route.path + '/' + this.id
    }
  },
  methods: {
    removeClient (id) {
      this.$store.dispatch('clients/removeClient', id)
      const clientOfferIds = this.$store.getters['offers/offers']
        .filter(offer => offer.clientId === id)
        .map(offer => offer.id)
      this.$store.dispatch('offers/removeClientOffers', clientOfferIds)
    }
  }
}

</script>

<style lang="scss" scoped>

li {
  margin: 1rem 0;
  border: 1px solid #dad9d9;
  border-radius: 10px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4,
h5 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
