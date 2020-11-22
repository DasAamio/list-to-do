<template>
  <section id="FAQ" class="grey lighten-5 pa-16 ">
    <h1 class="text-center display-3 font-weight-bold"><span>Common</span> <span class="cyan--text">FAQs</span></h1>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <p class="text-center" style="font-size: 18px">
          Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
          ipsum amet madolor sit amet.
        </p></v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-col cols="5" align-self="center" width="200px">

        <v-expansion-panels
          multiple
          v-for="(que,index) in questions"
          :key="index"
          class="mb-6"
        >
          <v-expansion-panel class="cyan white--text">
            <v-expansion-panel-header>{{ que.question }}</v-expansion-panel-header>
            <v-divider class="mx-5"></v-divider>
            <v-expansion-panel-content color="white cyan--text pt-5">
              {{ que.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-col>
      <v-col cols="4">
        <v-img style="border-radius: 20px; margin: 0 auto" width="350" height=" 510"
               src="https://fox-landing-page.netlify.app/assets/img/mobile-2.png"></v-img>
      </v-col>
      <v-col></v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "LandingPageFaq",
  data() {
    return {
      questions: [
        {question: "About Probal", answer: "backend"},
        {question: "About Rajib", answer: "React Developer"},
        {question: "About Shahdin", answer: "Graphics Design"},
        {question: "About Amio", answer: "Vue learner"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
