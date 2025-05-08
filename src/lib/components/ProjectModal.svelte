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
	import {
	    Button,
	    Col,
	    Container,
	    Modal,
	    ModalBody,
	    ModalHeader,
	    Row,
	} from '@sveltestrap/sveltestrap';
	import { X } from 'svelte-bootstrap-icons';

	export let description: string;
	export let image: string;
	export let index: number;
	export let metadata: { name: string; type: string; url?: string }[];
	export let title: string;
	export let url: string;
	// biome-ignore lint/style/useConst: <explanation>
	export let isOpen = false;
	export let toggle: () => void;
</script>

<Modal
	class="portfolio-modal"
	fade
	id={`portfolioModal${index}`}
	{isOpen}
	{toggle}
	fullscreen
>
	<ModalHeader {toggle} />
	<Container>
		<Row>
			<Col lg={{ size: 8, offset: 2 }}>
				<ModalBody>
					<h2>{title}</h2>
					<hr class="star-primary" />
					<a href={url}>
						<img src={image} class="img-fluid img-centered" alt={title} />
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
					<Button on:click={toggle}><X /> Close</Button>
				</ModalBody>
			</Col>
		</Row>
	</Container>
</Modal>

<style lang="scss">
	@import '../../../scss/variables.scss';
	:global(.portfolio-modal) {
		height: auto;

		:global(.modal-content) {
			border-radius: 0;
			background-clip: border-box;
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

		a {
			text-decoration: none;
		}

		.img-centered {
			margin: 0 auto;
		}
	}
</style>
