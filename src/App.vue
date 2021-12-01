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
	background: -moz-linear-gradient(90deg,#e9e4f0,#d3cce3); /* FF 3.6+ */  
    background: -ms-linear-gradient(90deg,#e9e4f0,#d3cce3); /* IE10 */  
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #000000), color-stop(100%, #ffffff)); /* Safari 4+, Chrome 2+ */  
    background: -webkit-linear-gradient(90deg,#e9e4f0,#d3cce3); /* Safari 5.1+, Chrome 10+ */  
    background: -o-linear-gradient(90deg,#e9e4f0,#d3cce3); /* Opera 11.10 */  
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e4f0', endColorstr='#d3cce3'); /* IE6 & IE7 */  
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e4f0', endColorstr='#d3cce3')"; /* IE8+ */  
    background: background: linear-gradient(90deg,#e9e4f0,#d3cce3); /* the standard */  
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
