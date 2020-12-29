<template>
  <div v-if="!isLoading">
    <h4 class="subheading grey--text pa-5">Completed</h4>
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
          v-for="project in pageData"
          :key="project"
      >
        <v-layout row wrap
                  :class="`pa-3 project ${ project.status }`"
                  :page.sync="page"
                  :items-per-page="itemsPerPage"
                  @page-count="pageCount = $event"

        >
          <v-flex xs12 md6>
            <div class="caption grey--text">List title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm-3 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ moment(project.deadline).format('MMMM Do YYYY, h:mm a') }}</div>
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
            <div class="caption grey--text">Action</div>

            <v-btn
                icon x-small
                @click="$nuxt.$emit('toggleEditListPopup', project)"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
                icon x-small
                @click="$nuxt.$emit('toggleDeleteListPopup', project)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>

            <v-btn justify="center" align="center" color="primary" text x-small :to="`/details/${project._id}`"> Details</v-btn>
            <!--
                              <delete-popup/>-->
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <v-pagination
          v-if="totalPages !== 0"
          class="pt-5"
          color="primary"
          v-model="page"
          :length="totalPages"
      ></v-pagination>
      <v-row v-else>
        <v-col align="center" class="grey--text">
          {{ projectsByStatus.length > 0 ? 'No Data Matched' : 'No Data' }}
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-skeleton-loader
        class=" my-10 mx-auto px-10 pt-3"
        type="table"
    />
  </div>
</template>

<script>
import DeletePopup from "../components/deletePopup";
import EditList from "../components/EditListPopup";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "DoneListPage",
  components: {DeletePopup, EditList},
  data() {
    return {
      isLoading: false,
      search: '',
      page: 1,
      pageData: [],
      itemsPerPage: 5,
      delete: false
    }
  },
  async created() {
    this.isLoading = true
    await this.requestGetProjectByStatus({$axios: this.$axios, status: 'complete'})
    this.currentPageData()
    this.isLoading = false
  },
  watch: {
    search(newValue) {
      this.currentPageData(newValue)
    },
    page(newValue){
      this.currentPageData()
    }
  },
  computed: {
    ...mapGetters('projects', ['projectsByStatus']),
    totalPages() {
      return Math.ceil( this.search === undefined || this.search === '' ? this.projectsByStatus.length / this.itemsPerPage : this.pageData.length / this.itemsPerPage)
    }
  },
  methods: {
    ...mapActions('projects', ['requestGetProjectByStatus']),
    sortBy(prop) {
      this.pageData.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
    currentPageData(searchQuery) {
      if (searchQuery !== undefined && searchQuery !== '') {
        this.pageData = this.projectsByStatus.filter((project) => {
          return project.title.match(searchQuery)
        })
      } else {
        this.pageData = this.projectsByStatus.slice((this.page - 1) * this.itemsPerPage, (this.page * this.itemsPerPage))
      }
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