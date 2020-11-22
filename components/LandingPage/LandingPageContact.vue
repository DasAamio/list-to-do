<template>
  <section id="Contact" class="grey lighten-3 pa-10 pb-16">
     <h1 class="text-center cyan--text display-3 font-weight-bold">Get in touch</h1>
    <v-row>
        <v-col></v-col>
        <v-col cols="6">
          <p class="text-center">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p>
        </v-col>
        <v-col></v-col>
      </v-row>


     <v-row>
      <v-col>
        <v-img src="https://fox-landing-page.netlify.app/assets/img/mobile-1.png" width="400px" height="570px" class="mx-auto">

        </v-img>
      </v-col>


      <v-col cols="6" class="pa-5 ">

      <v-row class=" px-10 pt-5">

        <v-col>
          <v-col><v-text-field color="cyan" outlined label="Enter Your Email"></v-text-field></v-col>
        </v-col>

      </v-row>
      <v-textarea class="px-14" color="cyan" outlined label="Message"></v-textarea>
      <div align="center">
        <v-btn class="mb-10 mx-14 py-5" id="send" mail-to="https://mail.google.com/mail/u/0/#inbox">Send</v-btn>

      </div>

    <v-row class="mx-10">
      <v-col  align="center">
        <v-icon style="font-size: 40px" color="red" class="mb-4 marker">mdi-map-marker</v-icon>
        <p class="font-weight-bold mb-0" style="font-size: 14px">3rd floor, Rongdhonu-15 Chowkidekhi, Sylhet</p>
      </v-col>
      <v-col  align="center">
        <v-icon style="font-size: 40px" color="black" class="mb-3 phone">mdi-phone</v-icon>
        <p class="font-weight-bold mb-0" style="font-size: 14px">+8801879-149501</p>
      </v-col>
      <v-col align="center">
        <v-icon style="font-size: 40px" color="indigo lighten-2" class="mb-3 message">mdi-message</v-icon>
        <p class="font-weight-bold mb-0" style="font-size: 14px">official@consoleit.io</p>
        <p class="font-weight-bold mb-0" style="font-size: 14px">contact@consoleit.io</p>
      </v-col>
    </v-row>

      </v-col>
     </v-row>
  </section>

</template>


<script>
export default {
    data(){
      return{
        dialog: false,
        contactShow: false,

      }
    }
}
</script>

<style scoped>
#send{
  font-size: medium;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #00bcd4;
  border-radius: 30px;
  color: aliceblue;
}
#send:hover{
  color: #00bcd4;
  background-color: white;
  border: 2px solid #00bcd4 ;
}
.marker{
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1);
  }
}
.phone{
  animation: roll 1s linear infinite;
}
@keyframes roll {
  0%{
    transform: rotate(0deg);
  }
  20%{
    transform: rotate(-20deg);
  }
  40%{
    transform: rotate(0deg);
  }
  60%{
    transform: rotate(-20deg);
  }
  80%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.message{
  animation: message 1s linear infinite;
}
@keyframes message {
  0%{
    transform: rotate(0deg);
  }
  10%{
    transform: rotate(10deg);
  }
  20%{
    transform: rotate(-10deg);
  }
  30%{
    transform: rotate(10deg);
  }
  40%{
    transform: rotate(-10deg);
  }0%{
    transform: rotate(0deg);
  }0%{
    transform: rotate(0deg);
  }0%{
    transform: rotate(0deg);
  }0%{
    transform: rotate(0deg);
  }0%{
    transform: rotate(0deg);
  }0%{
    transform: rotate(0deg);
  }
}
</style>
