<!--
ASWNN - homepage to A Site With No Name and its projects.
Copyright (C) 2015-present Brian Duffey
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
	import { Col, Container, Row } from 'sveltestrap/src';
</script>

<header>
	<Container>
		<Row>
			<Col>
				<img
					class="img-fluid"
					src="/img/horse.png"
					alt="ASWNN's mascot, a horse with no name"
				/>
				<div class="intro-text">
					<span class="name">Welcome</span>
					<hr class="star-light" />
					<span class="skills">Please check out our current projects below</span
					>
				</div>
			</Col>
		</Row>
	</Container>
</header>

<style lang="scss">
	@import '../../scss/variables.scss';

	header {
		text-align: center;
		background: $success;
		color: white;

		:global(.container) {
			padding-top: 100px;
			padding-bottom: 50px;
		}

		img {
			display: block;
			margin: 0 auto 20px;
		}

		.intro-text {
			.name {
				display: block;
				font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial,
					sans-serif;
				text-transform: uppercase;
				font-weight: 700;
				font-size: 2em;
			}

			.skills {
				font-size: 1.25em;
				font-weight: 300;
			}
		}
	}

	@media (min-width: 768px) {
		header {
			:global(.container) {
				padding-top: 200px;
				padding-bottom: 100px;
			}

			.intro-text {
				.name {
					font-size: 4.75em;
				}

				.skills {
					font-size: 1.75em;
				}
			}
		}
	}
	img {
		height: 256px;
		width: 256px;
	}
</style>
