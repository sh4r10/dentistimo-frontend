import Vue from 'vue'
import Router from 'vue-router'
import Map from './components/Map.vue'
import Timeslot from './views/Timeslot.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Map,
    },
    {
      path: '/timeslots',
      name: 'timeslot',
      component: Timeslot,

    },
    {
      path: '/profiles',
      name: 'profile',
      component: Profile,

    }



  ],
})