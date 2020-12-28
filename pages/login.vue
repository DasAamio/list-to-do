<template>
<div class="pa-5">
  <v-card tile align="center" max-width="500px" class="mx-auto" justify="center">
    <div class="primary white--text text-center">
      <v-card-title color="primary">
        Login
      </v-card-title>
    </div>
    <v-divider></v-divider>
    <div class="pa-5">
      <v-text-field label="Email" type="email" v-model="form.email"
                    :rules="emailRules"
                    prepend-icon="mdi-email"
                    required
        ></v-text-field>
      <v-text-field label="password" v-model="form.email" type="password" prepend-icon="mdi-lock"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"></v-text-field>
      <v-card-actions>
        <v-btn class="primary white--text mx-auto" small to="/">Login</v-btn>
      </v-card-actions>
      <p class="text-center">Create account? <nuxt-link to="/register">Register</nuxt-link></p>
    </div>

  </v-card>
</div>
</template>

<script>
export default {
  name: "login.vue",
  layout: 'authLayout',
  data(){
    return{
      text: '',
      showPassword: false,
      form: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 8 || "Password length is too short. Minimum length is 8.",
      ],

    }
  },
  methods: {
    requestLogin(){
      if ( form.email === '' && form.password === ''){
        return console.log("email & password required")
      }
    }
  }
}
</script>

<style scoped>

</style>