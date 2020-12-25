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
                @click="dialog = !dialog"
            >
              <v-icon class="primary--text">mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <AddPopup v-if="dialog"/>
        <v-spacer></v-spacer>
        <p class="mt-7 mr-5 white--text"><span class="font-weight-bold"> Time:</span>
          <span class="font-weight-light">{{ new Date().toISOString().substr(0, 10) }}</span>
        </p>
        <p class="mt-7 mr-5 white--text">
          <span class="font-weight-bold white--text"> Date:</span>
          <span class="font-weight-light">{{ new Date().toISOString().substr(0, 10) }}</span>
        </p>
        <v-badge
            bordered
            color="error"
            content="1"

            class="mt-2 mr-5"
        >
          <v-icon color="white">mdi-bell</v-icon>
        </v-badge>

      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app class="primary">
        <div class="grey lighten-4" style="height: 80px">
          <div class="mt-3 ml-3 pt-3">
            <span class="primary--text font-weight-bold text-uppercase">List-to-do</span>
            <v-btn icon small color="primary" class="float-right mr-3" @click="drawer = !drawer">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </div>


        </div>
        <v-list>
          <v-list-item v-for="link in links" :key="link" :to="link.route">
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
import AddPopup from "./AddPopup";

export default {
  name: "Navbar",
  components: {Drawer, AddPopup},
  data() {
    return {
      dialog: false,
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-view-list', text: 'All List', route: '/AllListPage'},
        {icon: 'mdi-view-list', text: 'Important List', route: '/ImportantListPage'},
        {icon: 'mdi-view-list', text: 'Due List', route: '/DueListPage'},
        {icon: 'mdi-view-list', text: 'Done List', route: '/DoneListPage'}
      ]
    }
  }
}
</script>

<style scoped>

</style>