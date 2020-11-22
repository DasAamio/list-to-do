<template>
          <section class="grey lighten-4 pb-16">
            <div style="background-color: #00bcd4; height: 36.4rem;" >
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="5" class="white--text pl-8" align-self="center">
                  <h3>With us you will</h3>
                  <h1 class="display-4 font-weight-bold">Success</h1>
                  <h3 class="pb-3">Your business our service, Your success our responsibility</h3>
                  <v-btn color="yellow">Read More</v-btn>
                </v-col>
                <v-col cols="5">
                  <v-responsive>
                    <v-img style="float: right;" src="https://fox-landing-page.netlify.app/assets/img/mobile-1.png" height="630px" width="400px">
                    </v-img>
                  </v-responsive>
                </v-col>
                <v-col></v-col>
              </v-row>
            </div>

          </section>
</template>

<script>
export default {
  name:"LandingPageCarousel",
  data(){
    return {
      images: [
        {
          "url": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "text": "Do You Need Restaurant Service?"
        },
        {
          "url": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "text": "Do You Need Medical Shop Service?"
        },
        {
          "url": "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "text": "Do You Need Hotel Management Service Service?"
        },
      ],
    }
}
}
</script>

<style scoped>
#jumpingbtn {
  animation-name: jump;
  animation-duration: 10s;
  transition: ease;
}

@keyframes jump {
  0% {
    transform: scale(1)
  }
  10% {
    transform: scale(1.3)
  }
  20% {
    transform: scale(1)
  }
  30% {
    transform: scale(1.3)
  }
  40% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.3)
  }
  60% {
    transform: scale(1)
  }
  70% {
    transform: scale(1.3)
  }
  80% {
    transform: scale(1)
  }
  90% {
    transform: scale(1.3)
  }
  100% {
    transform: scale(1)
  }
}

</style>
