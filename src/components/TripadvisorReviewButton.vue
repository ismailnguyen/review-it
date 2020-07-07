<template>
	<a class="tripadvisor-brand review-button" :href="tripadvisorLink" target="_blank">Tripadvisor</a>
</template>

<script>
	export default {
		data () {
			return {
				tripadvisorLink: 'https://www.tripadvisor.fr/UserReview-g226862-d16649258-Namaste-Rosny_sous_Bois_Seine_Saint_Denis_Ile_de_France.html',
			}
		}
	}
</script>

<style scoped>
.tripadvisor-brand {
	color: #01dc9c;
	background: url(https://seeklogo.com/images/T/tripadvisor-logo-BDB616E7F6-seeklogo.com.png) no-repeat left 20px center / 40px 40px;
}

.tripadvisor-brand:hover {
    color: #ffffff;
    background-color: #01dc9c;
}
</style>
