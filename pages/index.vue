<template>
  <div class="dashboard">
    <h4 class="subheading grey--text pa-5">All List</h4>
    <v-container class="">
      <v-layout row class="my-5">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey"
                   @click="sortBy('title')"
                   v-bind="attrs" v-on="on">
              <v-icon left small>
                mdi-folder
              </v-icon>
              <span class="caption text-lowercase">By project Name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey"
                   @click="sortBy('due')"
                   v-bind="attrs" v-on="on">
              <v-icon left small>
                mdi-calendar
              </v-icon>
              <span class="caption text-lowercase">By Date</span>
            </v-btn>
          </template>
          <span>Sort project by Date</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-text-field
            class="mx-3"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details

        ></v-text-field>
      </v-layout>

      <v-card
          flat color="px-3"
          v-for="project in projects"
          :key="project"
          :search="search"
      >
        <v-layout row wrap
                  :class="`pa-3 project ${ project.status }`"
                  :page.sync="page"
                  :items-per-page="itemsPerPage"
                  @page-count="pageCount = $event"

        >
          <v-flex xs12 md4>
            <div class="caption grey--text">List title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm-3 md2>
            <div class="caption grey--text">Person</div>
            <div class=" ">{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm-3 md2>
            <div class="caption grey--text">Due by</div>
            <div class=" "> {{ project.due }}</div>
          </v-flex>

          <v-flex xs6 sm-3 md2>
            <div class="caption grey--text">Status</div>
            <div>
              <v-chip small :class="`${project.status} white--text caption mt-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>

          <v-flex xs6 sm-3 md2>
            <div class="caption grey--text ">Action</div>


            <v-dialog
                v-model="editDialog"
                max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon x-small
                    v-bind="attrs"
                    v-on="on"
                    @click="editDialog = !editDialog"
                >
                  <v-icon small>{{ project.action1 }}</v-icon>
                </v-btn>
              </template>
              <v-card class="pb-1">
                <v-card-title class="heading primary white--text">
                  Edit Todo List
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
                    <v-btn small class="mb-5 primary" @click="editTask()">Add new Task</v-btn>
                  </div>
                </div>
                <v-card-actions>
                  <v-btn class="primary white--text"  block @click="snackbar = true">save</v-btn>
                </v-card-actions>

                <p v-if="projects === 0"> Empty list, you must add list.  </p>
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



            <v-dialog
                v-model="deleteDialog"
                max-width="400px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon x-small
                    v-bind="attrs"
                    v-on="on"
                    @click="deleteDialog = !deleteDialog"
                >
                  <v-icon small>{{ project.action2 }}</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title color="primary">
                  Delete
                </v-card-title>
                <v-card-text>
                  Do you want to delete this list?
                </v-card-text>
                <v-card-actions class="mx-auto">
                  <v-btn small color="primary">Yes</v-btn>
                  <v-btn small color="error">No</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>



            <v-btn justify="center" align="center" color="primary" text x-small to="/Details"> Details</v-btn>

          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <v-pagination
          class="pt-5"
          color="primary"
          v-model="page"
          :length="pageCount"
      ></v-pagination>
      <!--<v-text-field
          :value="itemsPerPage"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          @input="itemsPerPage = parseInt($event, 3)"
      ></v-text-field>-->
    </v-container>
  </div>
</template>

<script>

import EditList from "../components/EditListPopup";

export default {
  name: "WelComePage",
  components: {
    EditList,
  },
  data() {
    return {
      time: '',
      dialog:true,
      menu1: false,
      menu2: false,
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,
      taskList: [{id: 0, checked: false, task: ''}],
      deleteDialog: false,
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      delete: false,
      projects: [
        {
          title: 'Design a new website',
          person: 'The net ninja',
          due: '1st Jan 2020',
          status: 'ongoing',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design a new website',
          person: 'Chun li',
          due: '10th Jan 2020',
          status: 'complete',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design video thumbnail',
          person: 'Ryu',
          due: '20th Dec 2019',
          status: 'complete',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design a new website',
          person: 'Gouken',
          due: '20th Oct jan 2019',
          status: 'overdue',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design a new website',
          person: 'The net ninja',
          due: '1st Jan 2020',
          status: 'ongoing',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design a new website',
          person: 'Chun li',
          due: '10th Jan 2020',
          status: 'complete',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design video thumbnail',
          person: 'Ryu',
          due: '20th Dec 2019',
          status: 'complete',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
        {
          title: 'Design a new website',
          person: 'Gouken',
          due: '20th Oct jan 2019',
          status: 'overdue',
          action1: 'mdi-pencil',
          action2: 'mdi-delete'
        },
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)

    },
    editTask() {
        this.taskList.push({
          id: this.taskList.length, checked: false, task: ''
        })
      }

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
