<template>
  <div id="app" class="ly_cont">
    <div class="ly_contInner">
      <Header></Header>
      <Navigation></Navigation>
      <Upload></Upload>
    </div>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Navigation from './components/common/Navigation.vue'
import Upload from './components/upload/Upload.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'Header': Header,
    'Navigation':Navigation,
    'Upload': Upload,
  }
}
</script>

<style>

</style>
