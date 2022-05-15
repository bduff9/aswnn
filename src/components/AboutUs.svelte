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
	import PersonFill from 'svelte-bootstrap-icons/lib/PersonFill';
	import { scrollToBottom } from 'svelte-scrollto';
	import { Button, Col, Container, Row } from 'sveltestrap/src';
</script>

<section class="success" id="about">
	<Container>
		<Row>
			<Col lg="12" class="text-center">
				<h2>About</h2>
				<hr class="star-light" />
			</Col>
		</Row>
		<Row>
			<Col lg={{ size: 4, offset: 2 }}>
				<p>
					This site is owned and operated by Billy Alexander and Brian Duffey.
					They specialize in full-stack web development.
				</p>
			</Col>
			<Col lg="4">
				<p>
					All current public projects can be found here. Languages used in these
					projects include JavaScript (nodejs, meteor, reactjs, jquery), html,
					and css (sass).
				</p>
			</Col>
			<Col lg={{ size: 8, offset: 2 }} class="text-center">
				<Button color="light" on:click={scrollToBottom} outline size="lg">
					<PersonFill /> More about Billy
				</Button>
				<Button color="light" on:click={scrollToBottom} outline size="lg">
					<PersonFill /> More about Brian
				</Button>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	@import '../../scss/variables.scss';
	section.success {
		background: $success;
		color: white;
	}

	:global(.btn-outline-light) {
		color: white;
		font-size: 20px;
		border: solid 2px white;
		background: transparent;
		transition: all 0.3s ease-in-out;
		margin-top: 15px;

		&:hover,
		&:focus,
		&:active,
		&:global(.active) {
			color: $success;
			background: white;
			border: solid 2px white;
		}

		:global(svg) {
			height: 22px;
			width: 22px;
			vertical-align: text-bottom;
		}
	}
</style>
