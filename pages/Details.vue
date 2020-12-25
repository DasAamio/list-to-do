<template>
  <div class="ma-4">
    <h4 class="grey--text pb-2">Details</h4>
    <v-divider></v-divider>
    <v-card max-width="80%" class="mx-auto my-6">
      <v-card-title class="primary white--text">Details</v-card-title>
      <div class="pa-5 ">
        <div class="pa-1 mb-2  primary--text rounded">
          <span class="font-weight-bold ">Project Name:</span>
          <span class="font-weight-light"> Project Design</span>
        </div>
        <div class=" primary--text rounded" >
          <div class="blue lighten-4 pa-5">
            <div class="font-weight-bold">Project description:</div>
            <p class=" text-justify mb-0"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries,</p>
          </div>
          </div>
          <v-row>
            <v-col cols="4">
              <div class="primary--text"><span class="font-weight-bold">Date: </span><span>2020-12-25</span></div>
            </v-col>
            <v-col cols="4">
              <div class="primary--text"><span class="font-weight-bold">Time: </span><span>8:30 pm</span></div>
            </v-col>
            <v-col cols="4">
              <div class="primary--text"><span class="font-weight-bold">Priority: </span>
                <span>
                  <v-chip class="red white--text">Imporatnt</v-chip>
                </span></div>
            </v-col>
          </v-row>
        <div class="primary--text">
          <span class="font-weight-bold">Project Task: </span>
          <v-checkbox class="my-0 mt-5" label="Listed Sum one"></v-checkbox>
          <v-checkbox class="my-0" label="Listed Sum two"></v-checkbox>
          <v-checkbox class="my-0" label="Listed Sum three"></v-checkbox>
          <v-checkbox class="my-0" label="Listed Sum four"></v-checkbox>
          <v-checkbox class="my-0" label="Listed Sum five"></v-checkbox>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Details"
}
</script>

<style scoped>

</style>