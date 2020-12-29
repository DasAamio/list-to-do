<template>
  <v-app>
    <navbar/>
    <v-main class="grey lighten-4">
      <nuxt/>
    </v-main>
    <Footer/>
    <AddPopup/>
    <EditListPopup/>
    <DeletePopup/>
  </v-app>
</template>

<script>

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddPopup from "~/components/AddPopup";
import EditListPopup from "~/components/EditListPopup";
import DeletePopup from "~/components/deletePopup";

export default {
  components: {DeletePopup, EditListPopup, AddPopup, Footer, Navbar},
  created() {
    if (!this.$store.state.auth.isAuthenticated) {
      console.log('user not logged in!')
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
</style>
