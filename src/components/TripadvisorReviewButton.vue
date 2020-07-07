<template>
	<a class="tripadvisor-brand review-button" :href="link" target="_blank">Tripadvisor</a>
</template>

<script>
	export default {
		props: ['link']
	}
</script>

<style scoped>
.tripadvisor-brand {
	color: #01dc9c;
	border: 2px solid #01dc9c;
	background: url(../assets/tripadvisor-logo.png) no-repeat left 20px center / 40px 40px;
}

.tripadvisor-brand:hover {
    color: #ffffff;
    background-color: #01dc9c;
}
</style>
