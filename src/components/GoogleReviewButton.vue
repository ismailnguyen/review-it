<template>
	<a class="google-brand review-button" :href="googlereviewLink" target="_blank">Google review</a>
</template>

<script>
	export default {
		data () {
			return {
				googlereviewLink: 'https://www.google.com/search?rlz=1C1GCEU_frFR871FR871&ei=rXsEX9rwB_PixgPEna74CQ&q=google+reviews+namaste+rosny+2&oq=google+reviews+namaste+rosny+2&gs_lcp=CgZwc3ktYWIQAzoECAAQRzoECAAQQzoCCAA6BggAEBYQHjoFCCEQoAE6CAghEBYQHRAeOgcIIRAKEKABUOw3WKdIYJ9KaABwAXgAgAFjiAHZCZIBAjE2mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwia-5nBorvqAhVzsXEKHcSOC58Q4dUDCAw&uact=5#lrd=0x47e613fc735e6793:0xea4811f9d1f2a392,3,,,'
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
