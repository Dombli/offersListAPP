<template>
  <div>
    <button
      v-if="!link"
      :class="mode"
    >
      <slot />
    </button>
    <router-link
      v-else
      :to="to"
    >
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #429EA6;
  border: 1px solid #153B50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #8f6fe0;
  border-color: #7c60c4;
}

</style>
