<template>
  <div id="app">
    <div class="ly_cont">
      <div class="ly_contInner">
        <Header></Header>
        <Navigation></Navigation>
        <Upload></Upload>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Navigation from './components/common/Navigation.vue'
import Upload from './components/upload/Upload.vue'
import Footer from './components/common/Footer.vue'

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
    'Footer': Footer,
  }
}
</script>

<style>

</style>
