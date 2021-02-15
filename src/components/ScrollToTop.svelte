<script lang="ts">
	import ChevronUp from 'svelte-bootstrap-icons/lib/ChevronUp';
	import { scrollToTop } from 'svelte-scrollto';
	import { Button } from 'sveltestrap/src';
</script>

<style type="text/scss">
	@import "../../scss/variables.scss";

	.scroll-top {
		position: fixed;
		right: 2%;
		bottom: 2%;
		width: 50px;
		height: 50px;
		z-index: 1049;

		:global(.btn) {
			font-size: 20px;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			line-height: 28px;

			&:focus {
				outline: none;
			}
		}
	}
</style>

<div class="scroll-top page-scroll d-md-none">
	<Button color="primary" on:click={scrollToTop}>
		<ChevronUp />
	</Button>
</div>
