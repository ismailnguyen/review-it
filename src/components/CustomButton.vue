<template>
	<a class="menu-brand review-button" :href="link" target="_blank">{{ text }}</a>
</template>

<script>
	export default {
		props: ['link', 'text']
	}
</script>

<style scoped>
.menu-brand {
	color: #6b65a7;
	border: 2px solid #6b65a7;
}

.menu-brand:hover {
    color: #ffffff;
    background-color: #6b65a7;
}
</style>
