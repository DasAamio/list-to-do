<template>
  <div  class="grey lighten-3">




    <div  class="pa-10">
      <v-row id="About" class="my-16 py-16">
        <v-col></v-col>

        <v-col cols="4">
          <v-img
            src="https://fox-landing-page.netlify.app/assets/img/mobile-2.png"
            height="550px"
            width="370px"
            class="mx-auto"
          ></v-img>
        </v-col>
        <v-col cols="6" class="pa-10">
          <h1 style="color:#232e6d">Make Business Easy With Us</h1>
          <v-row>
            <v-col cols="10">
              <p style="color: #333; font-size:14px; margin-bottom:0">
                Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor coli incidit labore lorem
              </p>
            </v-col>
          </v-row>
          <div style="border-left: 5px solid green">
            <p class="green lighten-4 green--text pa-3">
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incidit labore lorem
            </p>
          </div>
          <div style="border-left: 5px solid rebeccapurple">
            <p class="purple lighten-4 purple--text pa-3">
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incidit labore lorem
            </p>
          </div>
          <div style="border-left: 5px solid dodgerblue">
            <p class="blue lighten-4 blue--text pa-3">
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incidit labore lorem
            </p>
          </div>
          <div style="border-left: 5px solid #fbc02d">
            <p class="yellow lighten-3 yellow--text text--darken-2 pa-3">
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incidit labore lorem
            </p>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </div>










    <div class="pa-16 grey lighten-2">
      <h1 class="text-center display-3 cyan--text font-weight-bold">Why Us?</h1>
      <v-row class="mb-4">
        <v-col></v-col>
        <v-col cols="8">
          <p class="text-center pt-3 mb-0" style="font-size:18px; color: #333">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor coli incidit labore lorem ipsum amet madolor sit
            amet.
          </p>
        </v-col>
        <v-col></v-col>
      </v-row>


      <v-row >
        <v-col class="">


         <v-card width="200px" height="200px" class="rounded-circle purple darken-4" style="left:100px" align="center">
          <v-card-title>
            <v-icon class="mx-auto white--text mt-10">mdi-account</v-icon>
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">We provide best service</v-card-text>
         </v-card>


          <v-card width="200px" height="200px" class="rounded-circle red darken-4 mx-auto my-10" align="center">
          <v-card-title>
            <v-icon class="mx-auto white--text mt-10">mdi-account</v-icon>
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">We provide best service</v-card-text>
         </v-card>



         <v-card width="200px" height="200px" class="rounded-circle yellow darken-4" style=" left:120px " align="center">
          <v-card-title>
            <v-icon class="mx-auto white--text mt-10">mdi-account</v-icon>
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">We provide best service</v-card-text>
         </v-card>

        </v-col>
        <v-col>
          <div>
              <div id="circle" class="mt-10">

            </div>
          </div>
        </v-col>
        <v-col>


         <v-card width="200px" height="200px" class="rounded-circle cyan darken-4" style="right:30px"  align="center">
          <v-card-title>
            <v-icon class="mx-auto white--text mt-10">mdi-account</v-icon>
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">We provide best service</v-card-text>
         </v-card>


          <v-card width="200px" height="200px" class="rounded-circle grey darken-4 mx-auto my-10" align="center">
          <v-card-title>
            <v-icon class="mx-auto white--text mt-10">mdi-account</v-icon>
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">We provide best service</v-card-text>
         </v-card>



         <v-card width="200px" height="200px" class="rounded-circle blue darken-4" style="right:30px" align="center">
          <v-card-title>
            <v-icon class="mx-auto white--text mt-10">mdi-account</v-icon>
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">We provide best service</v-card-text>
         </v-card>


        </v-col>
      </v-row>
    </div>









  <div class="py-16">
      <h1 class="text-center display-3 font-weight-bold">Your <span class="cyan--text">Benefits</span></h1>
      <v-row>
      <v-col>
      </v-col>
      <v-col class="mt-5">
      <v-img src="https://fox-landing-page.netlify.app/assets/img/mobile-3.png">
      </v-img>
      </v-col>
      <v-col></v-col>
      </v-row>
  </div>

  </div>
</template>

<script>
export default {
  name: "LandingPageAboutUs",
  data() {
    return {
      About:
        "Hello guys!! there we are taking for you an nice opportunity for you. You can grave our service with cheaper rate."
    };
  }
};
</script>

<style scoped>

#circle {
  width: 600px;
  height: 600px;
  position: relative;
  z-index: 0;
  border: 5px dashed #2fb5c7;
  border-radius: 50%;
  margin: 0 auto;
  animation: spin 40s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
