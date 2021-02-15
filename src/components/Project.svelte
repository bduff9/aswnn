<script lang="ts">
	import { Col } from 'sveltestrap/src';
	import ZoomIn from 'svelte-bootstrap-icons/lib/ZoomIn';

	export let icon: string;
	export let index: number;
	export let title: string;
	export let onOpen: () => void;
</script>



<style type="text/scss">
	@import "../../scss/variables.scss";
	:global(.portfolio-item) {
		margin: 0 0 15px;
		right: 0;

		.portfolio-link {
			display: block;
			position: relative;
			max-width: 400px;
			margin: 0 auto;

			.caption {
				background: rgba($success, .9);
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

	// * {
	// 	z-index: 2;
	// }

	@media(min-width:767px) {
		:global(.portfolio-item) {
			margin: 0 0 30px;
		}
	}

	.project-icon {
		display: block;
		margin: 0 auto;
	}
</style>


<Col sm="4" class="portfolio-item">
	<a href={`#portfolioModal${index}`} class="portfolio-link" on:click|preventDefault={onOpen}>
		<div class="caption">
			<div class="caption-content">
				<ZoomIn />
			</div>
		</div>
		<img src={icon} class="img-fluid project-icon" alt={title} {title}>
	</a>
</Col>
