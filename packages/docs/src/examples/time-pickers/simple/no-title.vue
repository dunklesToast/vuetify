<template>
  <v-layout
    wrap
    justify-space-around
  >
    <v-time-picker
      v-model="picker"
      no-title
    ></v-time-picker>
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      no-title
    ></v-time-picker>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</script>
