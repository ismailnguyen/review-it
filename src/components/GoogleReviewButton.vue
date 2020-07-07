<template>
	<a class="google-brand review-button" :href="googlereviewLink" target="_blank">Google review</a>
</template>

<script>
	export default {
		data () {
			return {
				googlereviewLink: ''
			}
		}
	}
</script>

<style scoped>
.google-brand {
	border: 2px solid #00a0dc;
	color: #00a0dc;
	background: url(https://cdn2.hubspot.net/hubfs/1961464/Support%20images/new-google-favicon-512.png) no-repeat left 20px center / 40px 40px;
}

.google-brand:hover {
    color: #ffffff;
    background-color: #00a0dc;
    background-image: url(https://cdn2.hubspot.net/hubfs/1961464/Support%20images/new-google-favicon-512-white.png);
}
</style>
