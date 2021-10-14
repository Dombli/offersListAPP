<template>
  <div
    class="popup"
  >
    <form @submit.prevent="submitForm">
      <div
        class="form-control"
        :class="{invalid: !firstName.isValid}"
      >
        <label for="firstName"> First Name </label>
        <input
          id="firstName"
          v-model.trim="firstName.val"
          type="text"
        >
        <p v-if="!firstName.isValid">
          Please enter first name
        </p>
      </div>
      <div
        class="form-control"
        :class="{invalid: !lastName.isValid}"
      >
        <label for="lastName"> Last Name </label>
        <input
          id="lastName"
          v-model.trim="lastName.val"
          type="text"
        >
        <p v-if="!lastName.isValid">
          Please enter last name
        </p>
      </div>
      <div
        class="form-control"
        :class="{invalid: !companyName.isValid}"
      >
        <label for="companyName"> Company Name </label>
        <input
          id="companyName"
          v-model.trim="companyName.val"
          type="text"
        >
        <p v-if="!companyName.isValid">
          Please enter company name
        </p>
      </div>
      <div
        class="form-control"
        style="display: inline-block"
        :class="{invalid: !areas.isValid}"
      >
        <h3>Pick industry areas</h3>
        <div>
          <input
            id="IT"
            v-model="areas.val"
            value="IT"
            type="checkbox"
          >
          <label for="IT"> IT </label>
        </div>
        <div>
          <input
            id="eCommerce"
            v-model="areas.val"
            value="eCommerce"
            type="checkbox"
          >
          <label for="eCommerce"> eCommerce </label>
        </div>
        <div>
          <input
            id="Automotive"
            v-model="areas.val"
            value="Automotive"
            type="checkbox"
          >
          <label for="Automotive"> Automotive </label>
        </div>
        <p v-if="!areas.isValid">
          At least one checkbox must be selected
        </p>
      </div>
      <div
        class="form-control"
        :class="{invalid: !description.isValid}"
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
      <div class="actions">
        <base-button> Register </base-button>
        <base-button @click="$emit('close')">
          Close
        </base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['save-client', 'close'],
  data () {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      companyName: {
        val: '',
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    validateForm () {
      this.formIsValid = true
      this.firstName.isValid = true
      this.lastName.isValid = true
      this.companyName.isValid = true
      this.areas.isValid = true
      this.description.isValid = true

      if (this.firstName.val === '') {
        this.firstName.isValid = false
        this.formIsValid = false
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false
        this.formIsValid = false
      }
      if (this.companyName.val === '') {
        this.companyName.isValid = false
        this.formIsValid = false
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false
        this.formIsValid = false
      }
      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsValid = false
      }
    },
    submitForm () {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        company: this.companyName.val,
        areas: this.areas.val,
        description: this.description.val
      }
      this.$emit('save-client', formData)
    }
  }
}
</script>

<style lang="scss" scoped>

p {
  font-size: 0.8rem;
  color: red;
  font-style: italic;
}

.actions {
  display: inline-flex;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(2, 2, 2, 0.75);
  z-index: 10;
}

form {
  position: fixed;
  top: 10%;
  bottom: 10%;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  background-color: white;
  overflow-y: scroll;
  padding: 2rem;
}

section {
  padding: 1rem;
}

// menu {
//   padding: 1rem;
//   display: flex;
//   justify-content: flex-end;
//   margin: 0;
//

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
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

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
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
