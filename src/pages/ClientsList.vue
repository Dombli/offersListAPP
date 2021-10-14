<template>
  <div>
    <section>
      <base-card>
        <ul v-if="hasClients">
          <client-item
            v-for="client in filteredClients"
            :id="client.id"
            :key="client.id"
            :first-name="client.firstName"
            :last-name="client.lastName"
            :company-name="client.companyName"
            :areas="client.areas"
            :description="client.description"
          />
        </ul>
        <h3 v-else>
          No clients found.
        </h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import ClientItem from '../components/clients/ClientItem.vue'
export default {
  components: {
    ClientItem
  },
  computed: {
    filteredClients () {
      return this.$store.getters['clients/clients']
    },
    hasClients () {
      return this.$store.getters['clients/hasClients']
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem;
  max-width: 40rem;
}
</style>
