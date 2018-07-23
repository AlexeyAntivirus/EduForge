import Vue from "vue"
import VueRouter from "vue-router"

import Welcome from "@/components/Welcome.vue"

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			name: "Welcome",
			path: "/welcome",
			component: Welcome
		}
	],
})
