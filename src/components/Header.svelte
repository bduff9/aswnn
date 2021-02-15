<script lang="ts">
	import { Col, Container, Row } from 'sveltestrap/src'
</script>

<style type="text/scss">
	@import "../../scss/variables.scss";

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
				font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
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

	@media(min-width:768px) {
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

<header>
	<Container>
		<Row>
			<Col>
				<img class="img-fluid" src="/img/horse.png" alt="ASWNN's mascot, a horse with no name">
				<div class="intro-text">
					<span class="name">Welcome</span>
					<hr class="star-light">
					<span class="skills">Please check out our current projects below</span>
				</div>
			</Col>
		</Row>
	</Container>
</header>
