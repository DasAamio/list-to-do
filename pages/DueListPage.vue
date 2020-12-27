<template>
  <div>
    <h4 class="subheading grey--text pa-5">Due</h4>
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
            v-for="due in dueProjects"
            :key="due"
            :search="search"

        >
          <v-layout row wrap
                    :class="`pa-3 due ${ due.status }`"
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    @page-count="pageCount = $event"

          >
            <v-flex xs12 md4>
              <div class="caption grey--text">List title</div>
              <div>{{ due.title }}</div>
            </v-flex>
            <v-flex xs6 sm-3 md2>
              <div class="caption grey--text">Person</div>
              <div>{{ due.person }}</div>
            </v-flex>

            <v-flex xs6 sm-3 md2>
              <div class="caption grey--text">Due by</div>
              <div> {{ due.due }} </div>
            </v-flex>

            <v-flex xs6 sm-3 md2>
              <div class="caption grey--text">Status</div>
              <div >
                <v-chip small :class="`${due.status} white--text caption mt-2`">
                  {{due.status}}
                </v-chip>
              </div>
            </v-flex>

            <v-flex xs6 sm-3 md2>
              <div class="caption grey--text">Action</div>

              <v-btn icon x-small ><v-icon small>{{due.action1}}</v-icon></v-btn>
              <v-btn icon x-small ><v-icon small>{{due.action2}}</v-icon></v-btn>
              <v-btn justify="center" align="center" color="primary" text x-small  to="/Details"> Details </v-btn>
              <!--
                                <delete-popup/>-->
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
import DeletePopup from "../components/deletePopup";
import EditList from "../components/EditListPopup";
export default {
  name: "DoneListPage",
  components:{DeletePopup,EditList},
  data() {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      delete: false,
      dueProjects: [
        {title: 'Design a new website', person: 'The net ninja', due: '1st Jan 2020', status: 'ongoing', action1: 'mdi-pencil', action2: 'mdi-delete'},
        {title: 'Design a new website', person: 'Gouken', due: '20th Oct jan 2019', status: 'overdue',action1: 'mdi-pencil', action2: 'mdi-delete'},
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.dueProjects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)

    }
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: orange;
}
.v-chip.overdue{
  background: tomato;
}
</style>