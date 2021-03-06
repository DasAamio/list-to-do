<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card :loading="isLoading" class="pb-1">
      <v-card-title class="heading primary white--text">
        Add Todo List
      </v-card-title>
      <div class="pa-5 pb-0">
        <v-text-field v-model="form.title" label="Project Name" :rules="nameRules" placeholder="Project Name"
                      outlined></v-text-field>
        <v-textarea v-model="form.description" label="Project Description" :rules="description"
                    placeholder="Project Description"
                    outlined></v-textarea>
        <v-select
            v-model="form.status"
            :items="statusList"
            label="Project Status"
            dense
            outlined
        ></v-select>

        <v-row>
          <v-col>
            <strong>
              Project Deadline:
            </strong>
            <v-datetime-picker persistent label="Select date & time" v-model="form.deadline"></v-datetime-picker>
          </v-col>
        </v-row>
        <div class="font-weight-bold primary--text mb-3">Add Task:</div>
        <div class="mt-1">
          <v-text-field
              v-for="(task, index) in form.tasks"
              :key="index"
              v-model="task.taskname"
              class="my-0 mx-5"
              outlined dense
              prepend-icon="mdi-circle"
              label="Task Name"
              clearable
              append-icon="mdi-delete-outline"
              @click:append="removeSingleTask(index)"
          >
          </v-text-field>
        </div>
        <div>
          <v-btn small class="mb-5 ml-5 primary" @click="addTask()">
            <v-icon class="mr-1" small>mdi-plus-circle</v-icon>
            Add new Task
          </v-btn>
        </div>
      </div>
      <v-card-actions>
        <v-btn class="primary white--text" block @click="createList()">save</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import DatetimePicker from 'vuetify-datetime-picker'
import DateTimeMixin from "~/mixins/DateTimeMixin";
import {mapActions} from 'vuex'

Vue.use(DatetimePicker)
export default {
  name: "AddPopup",
  mixins: [DateTimeMixin],
  data() {
    return {
      dialog: false,
      isLoading: false,
      snackbar: false,
      timeout: 2000,
      text: 'List created.',
      form: {
        title: "",
        description: "",
        status: 'ongoing',
        isImportant: true,
        deadline: 0,
        tasks: []
      },
      statusList: ['ongoing', 'overdue', 'complete'],
      nameRules: [
        v => !!v || 'Project name is required',
        v => (v && v.length > 4) || 'Project name must be greater than 4 characters',
      ],
      description: [
        v => !!v || 'Project description is required',
        v => (v && v.length > 10) || 'Project description must be greater than 10 characters',
      ]

    }

  },
  created() {
    this.$nuxt.$on('toggleAddListPopup', () => {
      console.log('toggleAddListPopup--->>')
      this.dialog = !this.dialog
    })
  },
  methods: {
    ...mapActions('projects', ['requestCreateProject']),
    addTask() {
      this.form.tasks.push({
        taskname: ''
      })
    },
    removeSingleTask(index) {
      this.form.tasks.splice(index, 1)
    },
    async createList() {
      this.snackbar = true
      console.log(this.form)
      let deadline;
      if (this.form.title === '' || this.form.title.length < 4) {
        alert('Valid Project Name is required!')
        return;
      }
      if (this.form.description === '' || this.form.description < 10) {
        alert('Valid Project Description is required!')
        return;
      }

      if (this.form.deadline !== 0) {
        deadline = this._getCustomTimeToMillis(this.form.deadline)
      } else {
        alert('Project Deadline is required!')
        return;
      }

      this.isLoading = true
      const res = await this.requestCreateProject({
        $axios: this.$axios,
        title: this.form.title,
        description: this.form.description,
        status: this.form.status,
        deadline,
        isImportant: this.form.isImportant,
        tasks: this.form.tasks,
      })
      this.isLoading = false
      if (res.code === 'SUCCESS') {
        this.snackbar = true
        this.dialog = false
      }
    }
  }
}
</script>

<style scoped>

</style>