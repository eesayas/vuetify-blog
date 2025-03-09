<template>
  <v-dialog v-model="open" max-width="600">
    <v-card>
      <v-card-title>Are you sure?</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="proceed" color="green">proceed</v-btn>
        <v-btn @click="cancel">cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { proceed, cancel, message, open } = useConfirm();
</script>
