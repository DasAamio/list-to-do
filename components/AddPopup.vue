<template>
<div>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card class="pb-1">
      <v-card-title class="heading primary white--text">
      Add Todo List
      </v-card-title>
      <div class="pa-5 pb-0">
        <v-text-field label="Project Name" :rules="nameRules" placeholder="Project Name" outlined></v-text-field>
        <v-textarea label="Project Description" :rules="description" placeholder="Project Description" outlined></v-textarea>
        <v-row>
          <v-col cols="6 py-0">
            <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Picker without buttons"
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="Date"
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date"
                  @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6 py-0">
            <v-menu
                ref="menu"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="time"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                  v-if="menu2"
                  v-model="time"
                  full-width
                  @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
        <span class="font-weight-bold primary--text">Add Task:</span>
        <div class="mt-1">
          <v-text-field
              class="my-0"
              outlined dense
              label="Important"
              v-for="task in taskList"
              :key="task.id"
              append-icon="mdi-close"
              clearable
          >
          </v-text-field>
        </div>
        <div>
          <v-btn small class="mb-5 primary" @click="addTask()">Add new Task</v-btn>
        </div>
      </div>
      <v-card-actions>
        <v-btn class="primary white--text"  block @click="snackbar = true">save</v-btn>
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
</div>
</template>

<script>
export default {
name: "AddPopup",
  data(){
  return{
    date: new Date().toISOString().substr(0, 10),
    time: '',
    dialog:true,
    menu1: false,
    menu2: false,
    snackbar: false,
    text: 'My timeout is set to 2000.',
    timeout: 2000,
    taskList: [{id: 0, checked: false, task: ''}],
    nameRules: [
      v => !!v || 'Project name is required',
      v => (v && v.length > 4) || 'Project name must be less than 4 characters',
    ],
    description: [
      v => !!v || 'Project description is required',
      v => (v && v.length > 10) || 'Project description must be less than 10 characters',
    ],
    Date: [
      v => !!v || 'Date is required',
    ]

  }

  },
  methods: {
  addTask() {
    this.taskList.push({
      id: this.taskList.length, checked: false, task: ''
    })
  }
  }
}
</script>

<style scoped>

</style>