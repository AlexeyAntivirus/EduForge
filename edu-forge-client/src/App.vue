<template>
	<v-app>
		<v-toolbar app color="primary"></v-toolbar>
		<v-content>
			<v-container class="pa-0" fluid>
				<router-view/>
			</v-container>
		</v-content>
	</v-app>
</template>


<script lang="ts">
	import Vue from "vue"
	import {Component} from "vue-property-decorator"

	@Component({
		name: "App"
	})
	export default class App extends Vue {
	}
</script>

<style lang="scss">

</style>