<template>
	<div id="app">
		<router-view />

		<Footer />
	</div>
</template>


<script>
import Footer from './components/Footer.vue'

export default {
  components: {
	Footer
  }
}
</script>

<style>
	body {
		background: #d6d3dd;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.container {
		margin-top: 50vh; /* poussé de la moitié de hauteur de viewport */
		transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
	}

	footer {
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 1rem;
	}
</style>
