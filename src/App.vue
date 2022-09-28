<template>
  <div id="app" class="ly_cont">
    <div class="ly_contInner">
      <Header></Header>
      <Navigation></Navigation>
    </div>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Navigation from './components/common/Navigation.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'Header': Header,
    'Navigation':Navigation,
  }
}
</script>

<style>

</style>
