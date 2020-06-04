import { TYPES } from './store'

export const routes = [{
  name: TYPES.HOT,
  path: `/${TYPES.HOT}`,
  component: () => import('./views/UTopic.vue'),
  props: { type: TYPES.HOT }
}, {
  name: TYPES.NEW,
  path: `/${TYPES.NEW}`,
  component: () => import('./views/UTopic.vue'),
  props: { type: TYPES.NEW }
}, {
  name: TYPES.TOP,
  path: `/${TYPES.TOP}`,
  component: () => import('./views/UTopic.vue'),
  props: { type: TYPES.TOP }
}]
