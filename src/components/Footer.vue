<template>
  <footer>
	&copy; {{ thisYear }} - Review.it
  </footer>
</template>

<script>
	export default {
		data () {
			return {
				thisYear: new Date().getFullYear()
			}
		}
	}
</script>

<style scoped>

</style>
