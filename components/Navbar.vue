<template>
  <div>
    <nav style="border-bottom: 3px solid #1976d2">
      <v-toolbar dense app class="primary  grey--text">
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">List</span>
          <span class="">-to-</span>
          <span class="font-weight-light">Do</span>
        </v-toolbar-title>
        <template v-slot:extension>
          <v-fab-transition>
            <v-btn
                color="white"
                class="mr-5"
                fab
                dark
                small
                absolute
                bottom
                right
                @click="$nuxt.$emit('toggleAddListPopup')"
            >
              <v-icon class="primary--text">mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-spacer></v-spacer>
        <p class="mt-7 mr-5 white--text"><span class="font-weight-bold">
          <v-btn small icon>
            <v-icon color="white">mdi-clock</v-icon>
          </v-btn>
          Time:</span>
          <span style="font-weight: 100">{{ currentTime }}</span>
        </p>
        <p class="mt-7 mr-5 white--text">
          <span class="font-weight-bold white--text">
            <v-btn small icon>
            <v-icon color="white">mdi-calendar</v-icon>
          </v-btn> Date:</span>
          <span style="font-weight: 100">{{ new Date().toISOString().substr(0, 10) }}</span>
        </p>

<!--        <v-badge
            bordered
            color="error"
            content="1"
            overlap
            class="mt-2 mr-5"
        >
          <v-menu
              bottom
              left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  dark
                  icon
                  small
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-bell</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.route"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-badge>-->

        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                icon
                class="mr-5 mt-2"
                large
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                @click="logout()"
            >
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app class="blue">
        <div class="blue lighten-2" style="height: 80px">
          <div class="ml-3 pt-3">
            <span class="white--text font-weight-bold text-uppercase">List-to-do</span>
            <v-btn icon small color="white" class="float-right mr-3" @click="drawer = !drawer">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </div>


        </div>
        <v-list>
          <v-list-item v-for="(link,index) in links" :key="index" :to="link.route">
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import Drawer from "./Drawer";
import { mapActions } from 'vuex'
export default {

  name: "Navbar",
  components: {Drawer},
  data() {
    return {
      currentTime: '',
      dialog: false,
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'All List', route: '/'},
        {icon: 'mdi-view-list', text: 'Due List', route: '/DueListPage'},
        {icon: 'mdi-view-list', text: 'Completed List', route: '/DoneListPage'}
      ],
      items: [
        {title: 'Due List', route: '/DueListPage'},
        {title: 'Due List', route: '/DueListPage'},
        {title: 'Due List', route: '/DueListPage'},
        {title: 'Due List', route: '/DueListPage'}
      ],
    }
  },
  timers: {
    updateCurrentTime: {time: 1000, autostart: true, repeat: true}
  },
  methods: {
    ...mapActions('auth', ['performLogoutUser']),
    async logout() {
      await this.performLogoutUser()
      this.$router.push('/login')
    },
    updateCurrentTime() {
      this.currentTime = this.moment().format('hh:mm:ssA')

    }
  }
}
</script>

<style scoped>

</style>