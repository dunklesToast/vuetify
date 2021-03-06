// Types
import Vue from 'vue'

type VuetifyGoToTarget = number | string | HTMLElement | Vue

export type VuetifyGoToEasing =
  ((t: number) => number) |
  'linear' |
  'easeInQuad' |
  'easeOutQuad' |
  'easeInOutQuad' |
  'easeInCubic' |
  'easeOutCubic' |
  'easeInOutCubic' |
  'easeInQuart' |
  'easeOutQuart' |
  'easeInOutQuart' |
  'easeInQuint' |
  'easeOutQuint' |
  'easeInOutQuint'

export interface VuetifyGoToOptions {
  container?: string | HTMLElement | Vue,
  duration?: number
  offset?: number
  easing?: VuetifyGoToEasing
  appOffset?: boolean
}
