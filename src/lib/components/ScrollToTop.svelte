<!--
ASWNN - homepage to A Site With No Name and its projects.
Copyright (C) 2015-present Brian Duffey and Billy Alexander
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see {http://www.gnu.org/licenses/}.
Home: https://asitewithnoname.com/
-->
<script lang="ts">
	import { Button } from '@sveltestrap/sveltestrap';
	import { ChevronUp } from 'svelte-bootstrap-icons';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="scroll-top page-scroll d-md-none">
	<Button color="primary" on:click={scrollToTop}>
		<ChevronUp />
	</Button>
</div>

<style lang="scss">
	@import '../../../scss/variables.scss';

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
