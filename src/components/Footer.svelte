<script lang="ts">
	import { Button, Col, Container, Row } from 'sveltestrap/src';
	import CloudFill from 'svelte-bootstrap-icons/lib/CloudFill';
	import Facebook from 'svelte-bootstrap-icons/lib/Facebook';
	import Github from 'svelte-bootstrap-icons/lib/Github';
	import Linkedin from 'svelte-bootstrap-icons/lib/Linkedin';
	import Twitter from 'svelte-bootstrap-icons/lib/Twitter';

	const year = new Date().getFullYear();
</script>

<style type="text/scss">
	@import "../../scss/variables.scss";

	footer {
		color: white;

		h3 {
			margin-bottom: 30px;
		}

		.footer-above {
			padding-top: 50px;
			background-color: $primary;
		}

		:global(.footer-col) {
			margin-bottom: 50px;
		}

		.footer-below {
			padding: 25px 0;
			background-color: darken($primary, 5%);
		}

		:global(.btn-social) {
			display: inline-block;
			height: 50px;
			width: 50px;
			border: 2px solid white;
			border-radius: 100%;
			text-align: center;
			font-size: 20px;
			line-height: 45px;
			margin-top: 0;

			:global(svg) {
				vertical-align: baseline;
				margin: 6px 0;
			}
		}

		.name {
			width: 40px;
		}
	}
</style>

<footer class="text-center">
	<div class="footer-above">
		<Container>
			<Row>
				<Col md="4" class="footer-col">
					<h3>Location</h3>
					<p>Chicago, IL</p>
				</Col>
				<Col md="4" class="footer-col">
					<h3>Around the Web</h3>
					<ul id="about-billy" class="list-inline">
						<li class="list-inline-item text-end name">Billy</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://www.facebook.com/biliy.alexander" outline>
								<Facebook />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://twitter.com/balexander8285" outline>
								<Twitter />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://www.linkedin.com/in/billyAlexander82" outline>
								<Linkedin />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://github.com/balexander82" outline>
								<Github />
							</Button>
						</li>
						<li class="list-inline-item invisible">
							<Button class="btn-social" color="light" href="#" outline>
								<CloudFill />
							</Button>
						</li>
					</ul>
					<ul id="about-brian" class="list-inline">
						<li class="list-inline-item text-end name">Brian</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://www.facebook.com/brian.e.duffey" outline>
								<Facebook />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://twitter.com/duffmaster33" outline>
								<Twitter />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://www.linkedin.com/in/brianeduffey" outline>
								<Linkedin />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://github.com/bduff9" outline>
								<Github />
							</Button>
						</li>
						<li class="list-inline-item">
							<Button class="btn-social" color="light" href="https://brianduffey.dev/" outline>
								<CloudFill />
							</Button>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	</div>
	<div class="footer-below">
		<Container>
			<Row>
				<Col lg="12">
					Copyright &copy; ASiteWithNoName.com {year}
				</Col>
				<Col hidden>
					<a href="/privacy_policy">Privacy Policy</a>
					<a href="/terms">Terms &amp; Conditions</a>
				</Col>
			</Row>
		</Container>
	</div>
</footer>
