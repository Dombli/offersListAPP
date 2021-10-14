<template>
  <div id="content">
    <the-header />
    <div class="container center-content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  },
  async mounted () {
    const es5test = await Promise.resolve('Async/Await are supported')
    console.log(es5test)
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #EFE5DC;
}

#content {
  margin: 3% 8%;
  background-color: white;
  // padding: 1% 2%;
  border-radius: 10px;
  padding-bottom: 2rem
}

</style>
