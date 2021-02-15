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
