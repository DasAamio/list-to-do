<template>
  <div class="ma-4">
    <h4 class="primary--text pb-1">Details</h4>
    <v-divider class="primary"></v-divider>
    <v-card v-if="!isLoading" max-width="600px" class="mx-auto my-6">
      <v-card-title class="primary white--text">Details</v-card-title>
      <div class="pa-5 ">
        <div class="pa-1 mb-2  primary--text rounded">
          <span class="font-weight-bold ">Project Name:</span>
          <span class="font-weight-light"> {{ singleProject.title }}</span>
        </div>
        <div class=" primary--text">
          <div class="blue lighten-4 pa-5 mb-2" style="border-radius: 5px">
            <div class="font-weight-bold">Project description:</div>
            <p class=" text-justify mb-0">{{ singleProject.description }}</p>
          </div>
        </div>
        <v-row>
          <v-col cols="4">
            <div class="primary--text"><span class="font-weight-bold">Date: </span><span>{{
                moment(singleProject.deadline).format('YYYY/MM/DD')
              }}</span></div>
          </v-col>
          <v-col cols="4">
            <div class="primary--text"><span class="font-weight-bold">Time: </span><span>{{
                moment(singleProject.deadline).format('hh:mm a')
              }}</span></div>
          </v-col>
          <v-col cols="4">
            <div class="primary--text"><span class="font-weight-bold">Status: </span>
              <span>
                  <v-chip class="white--text"
                          :class="`v-chip ${singleProject.status}`">{{ singleProject.status }}</v-chip>
              </span>
            </div>
          </v-col>
        </v-row>
        <div class="primary--text">
          <span class="font-weight-bold">Project Task: </span>
          <p class="my-0 mt-5 black--text" v-for="(task, index) in singleProject.tasks" :key="index">
            <v-icon small class="green white--text rounded mx-3">mdi-check</v-icon>
            {{ task.taskname }}
          </p>
        </div>
      </div>
    </v-card>
    <v-skeleton-loader
        v-else
        class=" my-4 mx-auto"
        max-width="600"
        type="card"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Details",
  data() {
    return {
      isLoading: true
    }
  },
  async created() {
    await this.requestGetSingleProject({$axios: this.$axios, id: this.$route.params.id})
    this.isLoading = false
  },
  computed: {
    ...mapGetters('projects', ["singleProject"])
  },
  methods: {
    ...mapActions('projects', ["requestGetSingleProject"])
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}
</style>