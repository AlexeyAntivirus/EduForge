import Vue from "vue"
import Vuetify from "vuetify"

import App from "./App.vue"
import router from "./scripts/router"
import store from "@/scripts/store"

Vue.config.productionTip = false


Vue.use(Vuetify, {
	theme: {
		primary: "#2c3e50",
		secondary: "#34495e",
		accent: "#3498db",
		error: "#e74c3c",
		info: "#2980b9",
		success: "#2ecc71",
		warning: "#f1c40f"
	}
})

new Vue({
	name: "Index",
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
