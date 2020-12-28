<template>
  <div class="pa-5">
    <v-card max-width="600px" class="mx-auto" justify="center">
      <div class="primary white--text text-center">
        <v-card-title color="primary">
          Register
        </v-card-title>
      </div>
      <v-divider></v-divider>
      <div class="pa-10 pb-0">
        <v-text-field label="Name" type="text" v-model="form.name" prepend-icon="mdi-account"></v-text-field>
        <v-text-field label="Email" type="email" v-model="form.email" prepend-icon="mdi-email"></v-text-field>
        <v-text-field label="password" type="password" v-model="form.password" prepend-icon="mdi-lock"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"></v-text-field>
        <v-card-actions class="">
          <v-btn class="primary white--text mx-auto" small>Register</v-btn>
        </v-card-actions>
      </div>
      <div class="text-center pb-5">
        <p>Have you any Account?
          <nuxt-link to="/login">sign in</nuxt-link>
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "register.vue",
  layout: 'authLayout',
  data() {
    return {
      text: '',
      showPassword: false,
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>