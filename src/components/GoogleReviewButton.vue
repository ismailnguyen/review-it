<template>
	<a class="google-brand review-button" :href="link" target="_blank">Google review</a>
</template>

<script>
	export default {
		props: ['link']
	}
</script>

<style scoped>
.google-brand {
	border: 2px solid #00a0dc;
	color: #00a0dc;
	background: url(../assets/google-logo.png) no-repeat left 20px center / 40px 40px;
}

.google-brand:hover {
    color: #ffffff;
    background-color: #00a0dc;
}
</style>
