<template>
  <div>
    <li>
      <h3>{{ offertitle }}</h3>
      <h4>{{ description }}</h4>
      <div class="actions">
        <base-button @click="removeOffer(id)">
          Delete
        </base-button>
        <base-button
          v-if="showButton"
          link
          :to="clientLink"
        >
          Go to client's details
        </base-button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['offertitle', 'description', 'areas', 'clientId', 'showButton', 'id'],
  computed: {
    clientLink () {
      return '/clients/' + this.clientId
    }
  },
  methods: {
    removeOffer (id) {
      this.$store.dispatch('offers/removeOffer', id)
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

ul {
  list-style: none;
}

</style>
