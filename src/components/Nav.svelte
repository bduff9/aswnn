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
	import { onMount } from 'svelte';
	import { scrollto } from 'svelte-scrollto';
	import {
		Collapse,
		Nav,
		Navbar,
		NavbarBrand,
		NavbarToggler,
		NavItem,
		NavLink,
	} from 'sveltestrap/src';

	let scrollY = 0;
	let isOpen = false;

	const handleUpdate = (event: CustomEvent<boolean>): void => {
		isOpen = event.detail;
	};

	onMount(async () => {
		const ScrollSpy = await import('bootstrap/js/dist/scrollspy');
		const scrollSpy = new ScrollSpy.default(document.body, {
			offset: 200,
			target: '#mainNav',
		});

		return () => scrollSpy.dispose();
	});
</script>

<svelte:window bind:scrollY />
<Navbar
	class="navbar-fixed-top navbar-custom{scrollY > 80 ? ' affix' : ' affix-top'}"
	dark
	expand="md"
	id="mainNav"
>
	<!-- Brand and toggle get grouped for better mobile display -->
	<NavbarBrand class="page-scroll" href="#page-top"
		>A Site With No Name</NavbarBrand
	>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<!-- Collect the nav links, forms, and other content for toggling -->
	<Collapse
		{isOpen}
		navbar
		expand="md"
		on:update={handleUpdate}
		id="bs-example-navbar-collapse-1"
	>
		<Nav class="ms-auto" navbar>
			<NavItem class="page-scroll">
				<a class="nav-link" use:scrollto={'#portfolio'} href="#portfolio"
					>Projects</a>
			</NavItem>
			<NavItem class="page-scroll">
				<a class="nav-link" use:scrollto={'#about'} href="#about">About</a>
			</NavItem>
			<NavItem class="page-scroll">
				<a class="nav-link" use:scrollto={'#contact'} href="#contact"
					>Contact</a
				>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>

<style lang="scss">
	@import '../../scss/variables.scss';
	:global(.navbar-custom) {
		background: $primary;
		font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		text-transform: uppercase;
		font-weight: 700;
		border: none;

		:global(a:focus) {
			outline: none;
		}

		:global(.navbar-brand) {
			color: white;

			&:hover,
			&:focus,
			&:active,
			&:global(.active) {
				color: white;
			}
		}

		:global(.navbar-nav) {
			letter-spacing: 1px;

			:global(.nav-item) {
				:global(a) {
					color: white;
					padding-bottom: 15px;
					padding-top: 15px;

					&:hover {
						color: $success;
						outline: none;
					}

					&:focus,
					&:active {
						color: white;
					}
				}

				:global(.active) {
					color: white;
					background: $success;

					&:hover,
					&:focus,
					&:active {
						color: white;
						background: $success;
					}
				}
			}
		}

		:global(.navbar-toggler) {
			color: white;
			text-transform: uppercase;
			font-size: 10px;
			border-color: white;

			&:hover,
			&:focus {
				background-color: $success;
				color: white;
				border-color: $success;
			}
		}
	}

	@media (min-width: 768px) {
		:global(.navbar-custom) {
			padding: 25px 0;
			-webkit-transition: padding 0.3s;
			-moz-transition: padding 0.3s;
			transition: padding 0.3s;

			:global(.navbar-brand) {
				font-size: 2em;
				-webkit-transition: all 0.3s;
				-moz-transition: all 0.3s;
				transition: all 0.3s;
			}
		}

		:global(.navbar-custom.affix) {
			padding: 10px 0;

			:global(.navbar-brand) {
				font-size: 1.5em;
			}
		}
	}

	:global(.navbar-fixed-top) {
		position: fixed;
		left: 0;
		right: 0;
		z-index: 1030;
	}
</style>
