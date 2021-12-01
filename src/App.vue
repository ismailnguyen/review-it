<template>
  <div id="app">
	<router-view />
  </div>
</template>

<script>

</script>

<style>
body {
	background: #d3cce3;
	
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 50vh; /* poussé de la moitié de hauteur de viewport */
	transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
}
</style>
