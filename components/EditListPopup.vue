<template>
  <div>
  <v-dialog  transition="dialog-bottom-transition" v-model="dialog" max-width="600px">
    <v-card class="pb-10">
      <v-card-title class="heading primary white--text">
        Edit Todo List
      </v-card-title>
      <div class="pa-5">
        <v-text-field label="Project Name" placeholder="Project Name" outlined></v-text-field>
        <v-textarea label="Project Description" placeholder="Project Description" outlined></v-textarea>
        <v-row>
          <v-col cols="6">
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
          <v-col cols="6">
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
        <v-checkbox label="Important"></v-checkbox>
      </div>
      <v-card-actions class="">
        <v-btn class="primary white--text" tile small>Edit List</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
export default {
name: "EditList",
  data(){
    return{
      date: new Date().toISOString().substr(0, 10),
      dialog:true,
      menu1: false,
      menu2: false,
    }
  }
}
</script>

<style scoped>

</style>