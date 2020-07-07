<template>
  <div id="app">
	<Loader v-if="isLoading" />
	
	<div v-else>
		<h1 v-if="!isNotFound">{{ store.name }}</h1>
		<h2 v-if="!isNotFound">Leave us a review</h2>
		
		<TripadvisorReviewButton v-if="!isNotFound" />
		<GoogleReviewButton v-if="!isNotFound" />
		
		<NotFound v-if="isNotFound" />
		
		<Footer />
	</div>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import GoogleReviewButton from './components/GoogleReviewButton.vue'
import TripadvisorReviewButton from './components/TripadvisorReviewButton.vue'
import NotFound from './components/NotFound.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'

export default {
  components: {
	Loader,
	GoogleReviewButton,
	TripadvisorReviewButton,
	NotFound,
	Footer
  },
  data () {
	return  {
		store: {
			name: '',
			tripadvisorLink: '',
			googlereviewLink: ''
		},
		isNotFound: false,
		isLoading: true
	}
  },
  mounted () {
  
	axios({
		url: 'https://api.airtable.com/v0/appHBWph3s8a5JrnO/Stores',
		headers: {
			'Authorization': `Bearer keyW1f6PGoANlJXXk`
		},
		params: {
			filterByFormula: 'AND(({uid} = "1"), ({status} = "Active"))'
		}
	}).then(({data: {records}}) => {
		if (records.length > 0) {
			this.store.name = records[0].fields['Name'];
			this.store.tripadvisorLink = records[0].fields['Tripadvisor'];
			this.store.googlereviewLink = records[0].fields['Google review'];
		} else {
			this.isNotFound = true;
		}
		
		this.isLoading = false;
	});
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
