<template>
  <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="600"
  >
    <template v-slot:default="dialog">
      <v-card :loading="isLoading">
        <v-toolbar
            color="primary"
            dark
        >Delete list?
        </v-toolbar>
        <v-card-text class="mt-5">
          <strong>{{ project.name }}</strong>
          To delete the data from the queue press DELETE button.
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
              text
              @click="dialog = false"
          >Close
          </v-btn>
          <v-btn
              text
              color="error"
              @click="deleteList()"
          >Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "deletePopup",
  data() {
    return {
      isLoading: false,
      dialog: false,
      project: {}
    }
  },
  methods: {
    ...mapActions('projects', ["requestDeleteProject"]),
    async deleteList() {
      this.isLoading = true
      await this.requestDeleteProject({$axios: this.$axios , id: this.project._id})
      this.isLoading = false
      this.dialog = false
    }
  },
  watch: {
    dialog(newValue) {
      if (!newValue) {
        this.project = {}
      }
    }
  },
  created() {
    this.$nuxt.$on('toggleDeleteListPopup', (project) => {
      console.log('toggleDeleteListPopup--->>', project)
      this.project = project
      this.dialog = !this.dialog
    })
  }
}
</script>

<style scoped>

</style>