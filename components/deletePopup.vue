<template>
<div>
  <!--&lt;!&ndash;<v-dialog max-width="600px" v-model="deleteDialog">
    <v-card>
      <v-card-title>
        Do you want to delete this list from your list?
      </v-card-title>
      <v-card-text>To delete the data from the queue press yes button.</v-card-text>
      <v-card-actions class="text-center">
        <v-btn small color="primary" @click="deleteDialog = !deleteDialog">Yes</v-btn>
        <v-btn small color="error" @click="deleteDialog = !deleteDialog">No</v-btn>
      </v-card-actions>
    </v-card>&ndash;&gt;
  </v-dialog>-->
  <v-dialog
      transition="dialog-top-transition"
      max-width="600"
  >
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="primary"
            dark
        >Do you want to delete this list from your list?</v-toolbar>
        <v-card-text>
          To delete the data from the queue press yes button.
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
              text
              @click="deleteDialog = false"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</div>
</template>

<script>
export default {
name: "deletePopup",
  data(){
  return{
      deleteDialog : true
    }
  }
}
</script>

<style scoped>

</style>