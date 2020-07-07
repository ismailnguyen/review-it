<template>
  <div id="app">
    <h1>Leave us a review</h1>
	
	<TripadvisorReviewButton />
	<GoogleReviewButton />
	
	<Footer />
  </div>
</template>

<script>
import GoogleReviewButton from './components/GoogleReviewButton.vue'
import TripadvisorReviewButton from './components/TripadvisorReviewButton.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
	GoogleReviewButton,
	TripadvisorReviewButton,
	Footer
  }
}
</script>

<style>

body {
	background: #d3cce3;
    background: -webkit-gradient(linear,left top,right top,from(#e9e4f0),to(#d3cce3));
    background: linear-gradient(90deg,#e9e4f0,#d3cce3);
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

.review-button {
	display: block;
	margin: 50px auto;
	width: 70%;
	max-width: 270px;
	padding: 15px 15px 15px 50px;
	border: 2px solid #01dc9c;
	border-radius: 50px;
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;
	font-size: 18px;
	line-height: 20px;
	-webkit-transition: all 0.3s ease;
	-moz-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
	-webkit-animation: wiggle 2s ease-in infinite;
	-moz-animation: wiggle 2s ease-in infinite;
	-o-animation: wiggle 2s ease-in infinite;
	animation: wiggle 2s ease-in infinite;
}


@-webkit-keyframes wiggle {
	0%, 20%, 100% { background-position: left 20px center; }
	5% { background-position: left 15px center; }
	10% { background-position: left 20px center; }
	15% { background-position: left 25px center; }
}

@-moz-keyframes wiggle {
	0%, 20%, 100% { background-position: left 20px center; }
	5% { background-position: left 15px center; }
	10% { background-position: left 20px center; }
	15% { background-position: left 25px center; }
}

@-o-keyframes wiggle {
	0%, 20%, 100% { background-position: left 20px center; }
	5% { background-position: left 15px center; }
	10% { background-position: left 20px center; }
	15% { background-position: left 25px center; }
}

@keyframes wiggle {
	0%, 20%, 100% { background-position: left 20px center; }
	5% { background-position: left 15px center; }
	10% { background-position: left 20px center; }
	15% { background-position: left 25px center; }
}
</style>
