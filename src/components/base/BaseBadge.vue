<template>
  <span
    class="badge"
  >{{ text }}</span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['type', 'title'],
  computed: {
    text () {
      return this.title.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.badge {
  background-color: #A682FF;
  color: white;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.it {
  background-color: #D6D3F0;
  color: white;
}

.ecommerce {
  background-color: #71008d;
  color: white;
}

.automotive {
  background-color: #8d006e;
  color: white;
}
</style>
