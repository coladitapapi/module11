import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import RandomQuotes from '../views/RandomQuotes.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: RandomQuotes },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

export default router

