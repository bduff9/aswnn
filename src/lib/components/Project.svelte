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
	import { Col } from '@sveltestrap/sveltestrap';
	import { ZoomIn } from 'svelte-bootstrap-icons';

	export let icon: string;
	export let index: number;
	export let title: string;
	export let onOpen: () => void;
</script>

<Col sm="4" class="portfolio-item">
	<a
		href={`#portfolioModal${index}`}
		class="portfolio-link"
		on:click|preventDefault={onOpen}
	>
		<div class="caption">
			<div class="caption-content">
				<ZoomIn />
			</div>
		</div>
		<img src={icon} class="img-fluid project-icon" alt={title} {title} />
	</a>
</Col>

<style lang="scss">
	@import '../../../scss/variables.scss';
	:global(.portfolio-item) {
		margin: 0 0 15px;
		right: 0;

		.portfolio-link {
			display: block;
			position: relative;
			max-width: 400px;
			margin: 0 auto;

			.caption {
				background: rgba($success, 0.9);
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: 0;
				transition: all ease 0.5s;
				-webkit-transition: all ease 0.5s;
				-moz-transition: all ease 0.5s;

				&:hover {
					opacity: 1;
				}

				.caption-content {
					position: absolute;
					width: 100%;
					height: 20px;
					font-size: 20px;
					text-align: center;
					top: 50%;
					margin-top: -12px;
					color: white;

					:global(svg) {
						margin-top: -12px;
						height: 3em;
						width: 3em;
					}
				}
			}
		}
	}

	@media (min-width: 767px) {
		:global(.portfolio-item) {
			margin: 0 0 30px;
		}
	}

	.project-icon {
		display: block;
		margin: 0 auto;
	}
</style>
