<template>
  <v-responsive
    class="white--text py-12"
    style="background: linear-gradient(to bottom, #1867c0, #5CBBF6)"
  >
    <v-container>
      <v-layout
        align-center
        justify-center
        wrap
      >
        <v-img
          :class="{
            'mx-5': $vuetify.breakpoint.mdAndUp,
            'mb-3': $vuetify.breakpoint.smAndDown
          }"
          :height="$vuetify.breakpoint.mdAndUp ? 256 : 135"
          :width="$vuetify.breakpoint.mdAndUp ? 256 : 135"
          class="shrink"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png"
        />
        <div
          class="text-center text-lg-left"
          :style="`flex: 0 1 ${$vuetify.breakpoint.mdAndDown ? '100%' : 'auto'}`"
        >
          <h1
            :class="$vuetify.breakpoint.smAndDown && 'display-1' || 'display-3'"
            class="font-weight-light mb-6 mx-4"
            v-html="$vuetify.breakpoint.smAndUp ? $t('Vuetify.Home.callout') : 'Vuetify.js'"
          />
          <v-layout
            :justify-center="$vuetify.breakpoint.mdAndDown"
            pa-4
            wrap
          >
            <v-btn
              :block="$vuetify.breakpoint.xsOnly"
              :to="{
                name: 'Documentation',
                params: {
                  lang: $route.params.lang,
                  namespace: 'getting-started',
                  page: 'quick-start'
                }
              }"
              class="primary--text ma-2"
              color="white"
              large
            >
              {{ $t('Vuetify.Home.getStarted') }}
            </v-btn>
            <v-btn
              :block="$vuetify.breakpoint.xsOnly"
              class="ma-2"
              color="white"
              href="https://github.com/vuetifyjs/vuetify"
              large
              outlined
            >
              <v-icon left>mdi-github-circle</v-icon>
              Github
            </v-btn>
            <v-btn
              :block="$vuetify.breakpoint.xsOnly"
              class="ma-2"
              color="grey lighten-3"
              outlined
              href="https://community.vuetifyjs.com"
              large
              rel="noopener"
              target="_blank"
            >
              <v-icon left>mdi-discord</v-icon>
              {{ $t('Vuetify.Home.getHelp') }}
            </v-btn>
          </v-layout>
        </div>
      </v-layout>
    </v-container>

    <feature />

    <tidelift />
  </v-responsive>
</template>

<script>
  export default {
    components: {
      Feature: () => import('./Feature'),
      Tidelift: () => import('./Tidelift'),
    },
  }
</script>
