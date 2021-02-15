<script lang="ts">
	import { Button, Col, Container, Modal, ModalBody, ModalHeader, Row } from 'sveltestrap/src';
	import X from 'svelte-bootstrap-icons/lib/X';

	export let description: string;
	export let image: string;
	export let index: number;
	export let metadata: any[];
	export let title: string;
	export let url: string;
  export let isOpen = false;
	export let toggle: () => void;
</script>

<style type="text/scss">
	@import "../../scss/variables.scss";
	:global(.portfolio-modal) {
		height: auto;

		:global(.modal-content) {
			border-radius: 0;
			background-clip: border-box;
			-webkit-box-shadow: none;
			box-shadow: none;
			border: none;
			min-height: 100%;
			padding: 0;
			text-align: center;

			h2 {
				margin: 0;
				font-size: 3em;
			}

			img {
				margin-bottom: 30px;
			}

			.item-details {
				margin: 30px 0;
			}
		}

		// .modal-backdrop {
		// 	opacity: 0;
		// 	display: none;
		// }

		a {
			text-decoration: none;
		}

		.img-centered {
			margin: 0 auto;
		}
	}
</style>

<Modal class="portfolio-modal" fade id={`portfolioModal${index}`} {isOpen} {toggle} transitionOptions={{}} fullscreen>
	<ModalHeader {toggle} />
	<Container>
		<Row>
			<Col lg={{ size: 8, offset: 2 }}>
				<ModalBody>
					<h2>{title}</h2>
					<hr class="star-primary">
					<a href={url}>
						<img src={image} class="img-fluid img-centered" alt={title}>
					</a>
					<p>{description}</p>
					<p><a href={url}>Go Now</a></p>
					<ul class="list-inline item-details">
						{#each metadata as metadatum}
						<li class="list-inline-item">
							{metadatum.type}:
							<strong>
								{#if metadatum.url}
								<a href={metadatum.url}>{metadatum.name}</a>
								{:else}
								{metadatum.name}
								{/if}
							</strong>
						</li>
						{/each}
					</ul>
					<Button default on:click={toggle}><X /> Close</Button>
				</ModalBody>
			</Col>
		</Row>
	</Container>
</Modal>
