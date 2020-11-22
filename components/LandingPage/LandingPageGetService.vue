<template>
  <section id="Services" class="">
    <h1 class="display-3 grey lighten-4 cyan--text text-center font-weight-bold pt-16 pb-3">
      Our Services
    </h1>
    <p class="mb-0 grey lighten-4 text-center pb-5" style="font-weight: 300;">Lorem ipsum is placeholder text commonly used in the graphic, print,</p>
    <v-row  class="grey lighten-4 pb-16 mb-0" style="">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-row>
          <v-col>
            <v-card
            class="mx-auto "
            max-width="320"
          >
              <div style="background-color: #016c8c">
                <v-icon x-large align-self="center" class="my-8 ml-4 pa-2 white" style="border-radius: 50%; color: #016c8c">packages</v-icon>
              </div>

              <v-card-title class="mb-3" style="color: #016c8c">service.serviceName</v-card-title>


            <v-card-subtitle class="pb-0">service.subtitle</v-card-subtitle>

            <v-card-text class="text--primary">
              <p>service.about</p>
            </v-card-text>

            <v-card-actions>

              <v-btn
                text
                id="btn"
                class="mb-5 mt-2 mx-auto"
                @click.stop="dialog = true"
              >
                Get the service
              </v-btn>
            </v-card-actions>
          </v-card>

          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </section>
</template>

<script>


export default {
  name: "LandingPageGetService",
  data(){
    return{
      dialog:false,
      show: false,
     /* services: [
        {
          serviceName: 'Restaurant Service',
          subtitle:'Welcome',
          url:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          about: 'We are come to you with our new product quickly grave the service',
          icon: 'mdi-account',
          to: '/choseoption'
        },
        {
          serviceName: 'Medical Shop Service',
          subtitle:'Welcome',
          url:"https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          about: 'We are come to you with our new product quickly grave the service',
          icon: 'mdi-account'
        },
        {
          serviceName: 'Hotel Management',
          subtitle:'Welcome',
          url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          about: 'We are come to you with our new product quickly grave the service',
          icon: 'mdi-account'
        }
      ]*/
    }
  },
}
</script>


<style scoped>
#btn{
  padding-left: 15px;
  padding-right: 15px;
  background-color: #016c8c;
  border-radius: 30px;
  color: #fff;
}
#btn:hover{
  color: #016c8c;
  background-color: white;
  border: 2px solid #016c8c ;
}
.container .card{
  position: relative;
  width: 300px;
  height: 420px;
  background-color: #fff;
  margin: 20px;
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 15px 25px rgba(0,0,0,0.2);
  transition: 0.5s;
}

.container .card .circle{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  clip-path: circle(180px at center 0);
  text-align: center;
}

.container .card .circle h2{
  color: #fff;
  font-size: 4.5em;
  padding: 30px 0;
}

.container .card .content{
  position: absolute;
  bottom: 10px;
  padding: 20px;
  text-align: center;
}

.container .card .content p{
  color: #666;
}
.container .card .content .a{
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 20px;
}
.container .card:nth-child(1) .circle,
.container .card:nth-child(1) .content .a{
  background: #00bcd4;
}
.container .card:nth-child(2) .circle,
.container .card:nth-child(2) .content .a{
  background: #ffaff0;
}
.container .card:nth-child(3) .circle,
.container .card:nth-child(3) .content .a{
  background: #ffaff0;
}

</style>
