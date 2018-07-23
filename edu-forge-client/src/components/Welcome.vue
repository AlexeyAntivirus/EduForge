<template>
	<div>
		<parallax :speed-factor="0.3"
		          breakpoint="(min-width: 80px)"
		          direction="down"
		          section-class="parallax"
		          container-class="parallax-image">
			<img src="../assets/MainImage4.png">
		</parallax>
		<v-container fluid class="elevation-2 big-row pa-0 pt-5">
			<v-layout justify-center align-center row wrap>
				<v-flex xs8 class="ma-2">
					<v-container fluid class="pa-0">
						<v-layout justify-center align-center row wrap>
							<v-flex xs3 class="ma-2">
								<v-card height="200px" class="elevation-2">
									AAAAAAAAAA
								</v-card>
							</v-flex>
							<v-flex xs3 class="ma-2">
								<v-card height="200px" class="elevation-2">
									AAAAAAAAAA
								</v-card>
							</v-flex>
							<v-flex xs3 class="ma-2">
								<v-card height="200px" class="elevation-2">
									AAAAAAAAAA
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script lang="ts">
	import Vue from "vue"
	import {Component} from "vue-property-decorator"
	import Parallax from "vue-parallaxy"

	@Component({
		name: "Welcome",
		components: {
			Parallax
		}
	})
	export default class Welcome extends Vue {
	}
</script>

<style scoped lang="scss">

	.parallax {
		z-index: 0;
		position: relative;
		scroll-behavior: smooth;
		overflow: hidden;
		height: 512px !important;
	}

	.parallax-image.is-parallax {
		left: 0;
		position: absolute;
		will-change: transform;
		right: 0;
		top: 0;
	}

	.parallax-image {
		width: 100%;
		overflow: hidden;
		height: auto;
	}

	.big-row {
		height: 512px;
		background-color: darken(#FFF, 4%);
	}
</style>