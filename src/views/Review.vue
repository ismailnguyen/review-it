<template>
	<div>
		<Loader v-if="isLoading" />
	
		<div v-else>
			<h1 v-if="!isNotFound">{{ store.name }}</h1>
			<h3 v-if="!isNotFound">{{ store.description }}</h3>
			
			<TripadvisorReviewButton :link="store.tripadvisorLink" v-if="!isNotFound" />
			<GoogleReviewButton :link="store.googlereviewLink" v-if="!isNotFound" />
			
			<NotFound v-if="isNotFound" />
			
			<Footer />
		</div>
	</div>
</template>

<script>
import Loader from '../components/Loader.vue'
import GoogleReviewButton from '../components/GoogleReviewButton.vue'
import TripadvisorReviewButton from '../components/TripadvisorReviewButton.vue'
import NotFound from '../components/NotFound.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
  props: ['id'],	
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
			googlereviewLink: '',
			description: ''
		},
		isNotFound: false,
		isLoading: true
	}
  },
  mounted () {
	axios({
		url: `https://api.airtable.com/v0/${ process.env.VUE_APP_AIRTABLE_BASE }/Stores`,
		headers: {
			'Authorization': `Bearer ${ process.env.VUE_APP_AIRTABLE_TOKEN }`
		},
		params: {
			filterByFormula: `AND(({uid} = "${this.id}"), ({status} = "Active"))`
		}
	}).then(({data: {records}}) => {
		if (records.length > 0) {
			this.store.name = records[0].fields['Name'];
			this.store.tripadvisorLink = records[0].fields['Tripadvisor'];
			this.store.googlereviewLink = records[0].fields['Google review'];
			this.store.description = records[0].fields['Description'];
		} else {
			this.isNotFound = true;
		}
		
		this.isLoading = false;
	});
  }
}
</script>

<style scoped>
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
