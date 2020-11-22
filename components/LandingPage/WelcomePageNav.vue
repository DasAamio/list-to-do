<template>
  <div id="Home">
    <v-row style="background-color: #00bcd4">
      <v-col></v-col>
      <v-col cols="10">

        <nav>
          <v-app-bar flat style="background-color: #00bcd4" class="ml-0">
            <v-toolbar-title>
              <v-icon></v-icon>
              <span class="white--text" style="font-size: 20px; font-weight: bold;">B2B
            <span style="color: #ffeb3b; font-size: 20px">Service Lab</span></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="text"
              tile
              color="white"
              group
              class="py-10 "
            >
              <v-btn id="btn1" class="white--text font-weight-bold">
                Home
              </v-btn>

              <v-btn href="#About" id="btn2" class="white--text font-weight-bold">
                About Us
              </v-btn>

              <v-btn href="#Services" id="btn3" class="white--text font-weight-bold">
                Our Services
              </v-btn>

              <v-btn href="#FAQ" id="btn4" class="white--text font-weight-bold">
                FAQs
              </v-btn>
              <v-btn href="#Contact" id="btn5" class="white--text font-weight-bold">
                Contact
              </v-btn>

              <v-btn id="btn6" value="justify" @click.stop="dialog = true" v-if="!loggedIn"
                     class="white--text font-weight-bold">
                Sign In
              </v-btn>

              <v-btn @click.stop="dialog = true" v-else-if="loggedIn" @click="logout=!logout">
                Sign out
              </v-btn>
            </v-btn-toggle>
          </v-app-bar>
        </nav>

      </v-col>
      <v-col></v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <v-card class="pa-6" v-if="!loggedIn" loading>
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-form>
            user: {{user}}
            <v-text-field v-model="form.email" label="email" type="email" outlined prepend-inner-icon="mdi-account-circle"></v-text-field>
            <v-text-field v-model="form.password" outlined label="Password" :type="showPassword ? 'text' : 'password'"
                          prepend-inner-icon="mdi-lock"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword = !showPassword"></v-text-field>

          </v-form>
          <span class="float-right">Forget password?</span>
        </v-card-text>
        <v-divider class="my-3"></v-divider>
        <v-card-action>
          <v-btn class="ml-6" color="info" @click="performLogin()">login</v-btn>
          <v-btn text color="success" class="float-right mr-2 ">
            <nuxt-link to="/register">Register</nuxt-link>
          </v-btn>
        </v-card-action>
      </v-card>
      <v-card v-else-if="logout">
        <v-card-title></v-card-title>
        <v-card-text>Do you want to logged out?</v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="loggedIn=!loggedIn">Yes</v-btn>
          <v-btn color="red">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn href="#Home" type="button"
           class="v-btn v-btn--bottom v-btn--contained v-btn--fab v-btn--fixed v-btn--right v-btn--round theme--dark cyan"
           aria-label="Scroll to top" title="Scroll to top" style="transform-origin: center center;"
           elevation="10"><span
      class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-up theme--dark"></i></span>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "WelcomePageNav",
  data() {
    return {
      name: '',
      dialog: false,
      loggedIn: false,
      showPassword: false,
      logout: false,
      text: '',
      form: {
        email: 'probaldattaturza@gmail.com',
        password: '1234',
        deviceToken: ''
      }
    }
  },
  computed: {
    ...mapState("store", ["user", "packages"])
  },
  methods:{
    ...mapActions("store", ["showAllPackage", "requestLogin"]),
    performLogin(){
      // validation
      console.log('performLogin---->>')
      this.requestLogin({
        email: this.form.email,
        password: this.form.password,
        deviceToken: this.form.deviceToken
      })
    }
  }
}

</script>

<style scoped>
#sign_in {
  width: 100px;
  border-radius: 30px;
}

#sign_in:hover {
  background: deeppink;
  color: white;
  transition: .3s;
  transition-timing-function: ease-in-out;
}

#btn1:hover {
  border-bottom: 4px solid white;
}

#btn2:hover {
  border-bottom: 4px solid white;
}

#btn3:hover {
  border-bottom: 4px solid white;
}

#btn4:hover {
  border-bottom: 4px solid white;
}

#btn5:hover {
  border-bottom: 4px solid white;
}

#btn6:hover {
  border-bottom: 4px solid white;
}
</style>
