<template>
  <v-layout
    justify-center
    wrap
  >
    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" class="ma-2" v-on="on">
          Slide Y Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-menu transition="slide-y-reverse-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" class="ma-2" v-on="on">
          Slide Y Reverse Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-layout>
</template>
