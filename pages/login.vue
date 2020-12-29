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
        <v-text-field label="password" v-model="form.password" type="password" prepend-icon="mdi-lock"
                      :rules="passwordRules"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"></v-text-field>
        <v-card-actions>
          <v-btn class="primary white--text mx-auto mb-5" @click="requestLogin()">Login</v-btn>
        </v-card-actions>
        <p class="text-center">Create account?
          <nuxt-link to="/register">Register</nuxt-link>
        </p>
      </div>

    </v-card>
  </div>
</template>

<script>
export default {
  name: "login.vue",
  layout: 'authLayout',
  data() {
    return {
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
  created() {

    if (this.$store.state.auth.isAuthenticated) {
      console.log('user logged in!')
      this.$router.push('/')
    }
  },
  methods: {
    async requestLogin() {
      if (this.form.email === '' || this.form.password === '') {
        alert('email & password required')
        return console.log("email & password required")
      } else {
        const res = await this.$axios.$post('http://localhost:3000/user/login', {
          email: this.form.email,
          password: this.form.password
        })

        if (res.msg === 'Login Success') {
          this.$store.commit('auth/SET_USER_DATA', {isAuthenticated: true, displayName: '', email: this.form.email})
          await this.$router.push('/')
        } else {
          alert(res.msg)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>