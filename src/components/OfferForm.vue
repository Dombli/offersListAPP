<template>
  <form @submit.prevent="submitForm">
    <br> or <br><br>
    <div
      class="form-control"
      :class="{ invalid: !clientId.isValid }"
    >
      <label for="clients">Choose from existing:</label>
      <select
        id="clients"
        v-model.trim="clientId.val"
        name="clients"
      >
        <option
          v-for="client in clientsList"
          :key="client.id"
          :value="client.id"
        >
          {{ client.firstName + ' ' + client.lastName }}
        </option>
      </select>
      <p v-if="!clientId.isValid">
        Please select a client
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !offerTitle.isValid }"
    >
      <label for="offerTitle"> Offer Title </label>
      <input
        id="offerTitle"
        v-model.trim="offerTitle.val"
        type="text"
      >
      <p v-if="!offerTitle.isValid">
        Please enter offer title
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !description.isValid }"
    >
      <label for="description"> Description </label>
      <textarea
        id="description"
        v-model.trim="description.val"
        rows="5"
      />
      <p v-if="!description.isValid">
        Please enter description
      </p>
    </div>
    <base-button> Register offer </base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-offer', 'show-form'],
  data () {
    return {
      offerTitle: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      clientId: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  computed: {
    clientsList () {
      return this.$store.getters['clients/clients']
    }
  },
  methods: {
    validateForm () {
      this.formIsValid = true
      this.offerTitle.isValid = true
      this.description.isValid = true
      this.clientId.isValid = true

      if (this.offerTitle.val === '') {
        this.offerTitle.isValid = false
        this.formIsValid = false
      }
      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsValid = false
      }
      if (this.clientId.val === '') {
        this.clientId.isValid = false
        this.formIsValid = false
      }
    },
    submitForm () {
      this.validateForm()
      if (!this.formIsValid) {
        return
      }
      const formData = {
        title: this.offerTitle.val,
        description: this.description.val,
        clientId: this.clientId.val
      }
      this.$emit('save-offer', formData)
      this.$emit('show-form')
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.8rem;
  font-style: italic;
  color: red;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
