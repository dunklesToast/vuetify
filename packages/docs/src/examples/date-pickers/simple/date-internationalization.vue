<template>
  <v-layout wrap justify-space-around>
    <v-date-picker
      v-model="picker"
      :first-day-of-week="0"
      locale="zh-cn"
    ></v-date-picker>
    <v-date-picker
      v-model="picker"
      :first-day-of-week="1"
      locale="sv-se"
    ></v-date-picker>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
  }
</script>
