<template>
  <v-main>
    <v-app>
      <welcome-page-nav/>
      <v-main>
          <nuxt/>
      </v-main>
      <welcome-page-footer/>
    </v-app>
  </v-main>
</template>

<script>
import WelcomePageNav from "../components/LandingPage/WelcomePageNav";
import {WelcomePageFooter} from "../.nuxt/components";

export default {
  components:{WelcomePageNav,
    WelcomePageFooter}
}
</script>
<style scoped>
</style>
