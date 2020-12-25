<template>
    <v-app>
      <navbar/>
      <v-main class="grey lighten-4">
          <nuxt/>
      </v-main>
      <Footer/>
    </v-app>
</template>

<script>

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components:{Footer, Navbar}
}
</script>
<style scoped>
</style>
