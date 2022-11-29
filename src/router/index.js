import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',
    name: "About",
    component: About,
  },
  {
    path: '/contact',
    name: "Contact",
    component: Contact,
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})
  
export default router
