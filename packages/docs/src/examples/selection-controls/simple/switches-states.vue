<template>
  <v-container fluid>
    <v-layout wrap class="dark--text">
      <v-flex xs6>on</v-flex>
      <v-flex xs6>off</v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs6>
        <v-switch value input-value="true"></v-switch>
      </v-flex>
      <v-flex xs6>
        <v-switch></v-switch>
      </v-flex>
    </v-layout>
    <v-layout wrap class="dark--text">
      <v-flex xs6>on disabled</v-flex>
      <v-flex xs6>off disabled</v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs6>
        <v-switch value input-value="true" disabled></v-switch>
      </v-flex>
      <v-flex xs6>
        <v-switch disabled></v-switch>
      </v-flex>
    </v-layout>
    <v-layout wrap class="dark--text">
      <v-flex xs6>on loading</v-flex>
      <v-flex xs6>off loading</v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs6>
        <v-switch loading="warning" value input-value="true"></v-switch>
      </v-flex>
      <v-flex xs6>
        <v-switch loading="warning"></v-switch>
      </v-flex>
    </v-layout>
  </v-container>
</template>
