<template>
  <v-layout>
    <v-flex>
      <v-sheet height="400">
        <v-calendar
          color="primary"
          type="day"
        >
          <template v-slot:day-header="{ present }">
            <template
              v-if="present"
              class="text-center"
            >
              Today
            </template>
          </template>

          <template v-slot:interval="{ hour }">
            <div
              class="text-center"
            >
              {{ hour }} o'clock
            </div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({}),
  }
</script>
