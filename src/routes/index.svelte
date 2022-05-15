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
	import AboutUs from '../components/AboutUs.svelte';
	import ContactUs from '../components/ContactUs.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	import Portfolio from '../components/Portfolio.svelte';
	import ScrollToTop from '../components/ScrollToTop.svelte';
</script>

<svelte:head>
	<title>Home | A Site With No Name</title>
</svelte:head>

<Nav />
<Header />
<Portfolio />
<AboutUs />
<ContactUs />
<Footer />
<ScrollToTop />
