<template>
  <section id="registration">
    <base-button @click="toggleForm">
      Register new offer
    </base-button>
    <div v-if="showForm">
      <h2> Offer registration </h2>
      <base-button @click="toggleClientForm">
        Register New Client
      </base-button>
      <client-form
        v-if="showClientForm"
        @close="toggleClientForm"
        @save-client="saveClient"
      />
      <br>
      <offer-form
        @show-form="toggleForm"
        @save-offer="saveOffer"
      />
    </div>
  </section>
</template>

<script>
import BaseButton from './base/BaseButton.vue'
// import ClientForm from './ClientForm.vue'
import ClientForm from './ClientForm.vue'
import OfferForm from './OfferForm.vue'
export default {
  components: { OfferForm, BaseButton, ClientForm },
  data () {
    return {
      showForm: false,
      showClientForm: false
    }
  },
  methods: {
    toggleClientForm () {
      this.showClientForm = !this.showClientForm
    },
    toggleForm () {
      this.showForm = !this.showForm
    },
    saveOffer (data) {
      this.$store.dispatch('offers/registerOffer', data)
      this.$router.push('/OffersList')
    },
    saveClient (data) {
      this.$store.dispatch('clients/registerClient', data)
      this.toggleClientForm()
    },
    popup () {
      this.clientRegistrationForm = !this.clientRegistrationForm
    }
  }
}
</script>

<style lang="scss" scoped>

form {
  display: block;
 // flex-direction: column;
  width: 80%;
  display:inline-block;
text-align:center;
}

#registration {
display:inline-block;
text-align:center;
 // flex-direction: column;
  width: 100%;

}
</style>
