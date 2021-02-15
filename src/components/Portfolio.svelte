<script lang="ts">
	import { Col, Container, Row } from 'sveltestrap/src';
	import Project from './Project.svelte';
	import ProjectModal from './ProjectModal.svelte';

	const projects = [
		{
			description: 'Started in 2012, the confidence pool is a fun way for friends and coworkers to enjoy the football season - even when their team is down and out.  Playing is simple, you just pick who you think will win and how confident you are in that outcome.  Though the football season is short, this game helps squeeze even more enjoyment out of the NFL.',
			icon: '/img/img256/Game Pad.png',
			image: '/img/apps/nfl-pool.png',
			metadata: [
				{ name: 'm-Power/Java', type: 'V1 Server', url: 'https://mrc-productivity.com/' },
				{ name: 'MySQL', type: 'V1 Database', url: 'https://www.mysql.com/' },
				{ name: 'jQuery', type: 'V1 Views', url: 'https://jquery.com/' },
				{ name: 'jQuery UI', type: 'V1 Styling', url: 'https://jqueryui.com/' },
				{ name: 'August 2012', type: 'V1 Released' },
				{ name: 'MeteorJS', type: 'V2 Server', url: 'https://www.meteor.com/' },
				{ name: 'MongoDB', type: 'V2 Database', url: 'https://www.mongodb.com/' },
				{ name: 'React', type: 'V2 Views', url: 'https://facebook.github.io/react/' },
				{ name: 'Bootstrap v4', type: 'V2 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'August 2015', type: 'V2 Released' },
				{ name: 'GraphQL (TypeORM & TypeGraphQL)', type: 'V3 Server', url: 'https://typegraphql.com/docs/examples.html' },
				{ name: 'MySQL', type: 'V3 Database', url: 'https://www.mysql.com/' },
				{ name: 'Vercel', type: 'V3 Hosting', url: 'https://vercel.com/' },
				{ name: 'NextJS', type: 'V3 Views', url: 'https://nextjs.org/' },
				{ name: 'Bootstrap v5', type: 'V3 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'Typescript', type: 'V3 Language', url: 'https://www.typescriptlang.org/' },
				{ name: 'August 2021', type: 'V3 Released (Pending)' },
			],
			title: 'NFL Confidence Pool',
			url: 'https://nfl.asitewithnoname.com/',
		},
		{
			description: 'Started in 2017, this is a pool played alongside season 7 of the hit HBO show, Game of Thrones.  Playing is straightforward, you simply pick seven characters who you think will die in season 7 and then assign points based on how confident you are in their demise.',
			icon: '/img/img256/RetroTV.png',
			image: '/img/apps/got-pool.png',
			metadata: [
				{ name: 'MeteorJS', type: 'V1 Server', url: 'https://www.meteor.com/' },
				{ name: 'MongoDB', type: 'V1 Database', url: 'https://www.mongodb.com/' },
				{ name: 'React', type: 'V1 Views', url: 'https://facebook.github.io/react/' },
				{ name: 'Bootstrap v4', type: 'V1 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'July 2017', type: 'V1 Released' },
				{ name: 'GraphQL (Serverless)', type: 'V2 Server', url: 'https://www.serverless.com/' },
				{ name: 'Aurora Serverless MySQL', type: 'V2 Database', url: 'https://aws.amazon.com/rds/aurora/serverless/' },
				{ name: 'AWS (Lambda)', type: 'V2 Hosting', url: 'https://aws.amazon.com/' },
				{ name: 'NextJS', type: 'V2 Views', url: 'https://nextjs.org/' },
				{ name: 'Bulma', type: 'V2 Styling', url: 'https://bulma.io/' },
				{ name: 'April 2019', type: 'V2 Released' },
			],
			title: 'Game of Thrones Death Pool',
			url: 'https://got.asitewithnoname.com/',
		},
		{
			description: 'A personal project created in 2016, this is a web app used to track my movie collection.  Stores metadata about movies such as poster, owned or wanted, and if watched or not.  Allows full searching and sorting, as well as all CRUD operations.',
			icon: '/img/img256/clapper.png',
			image: '/img/apps/movies.png',
			metadata: [
				{ name: 'MeteorJS', type: 'V1 Server', url: 'https://www.meteor.com/' },
				{ name: 'MySQL', type: 'V1 Database', url: 'https://www.mysql.com/' },
				{ name: 'AWS (Lambda)', type: 'V1 Hosting', url: 'https://aws.amazon.com/' },
				{ name: 'React', type: 'V1 Views', url: 'https://facebook.github.io/react/' },
				{ name: 'Bootstrap v4', type: 'V1 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'July 2017', type: 'V1 Released' },
				{ name: 'GraphQL (TypeORM & TypeGraphQL)', type: 'V2 Server', url: 'https://typegraphql.com/docs/examples.html' },
				{ name: 'MySQL', type: 'V2 Database', url: 'https://www.mysql.com/' },
				{ name: 'Vercel', type: 'V2 Hosting', url: 'https://vercel.com/' },
				{ name: 'NextJS', type: 'V2 Views', url: 'https://nextjs.org/' },
				{ name: 'Bootstrap v4', type: 'V2 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'Typescript', type: 'V2 Language', url: 'https://www.typescriptlang.org/' },
				{ name: 'May 2019', type: 'V2 Released' },
			],
			title: 'Movie Tracker',
			url: 'https://movies.asitewithnoname.com/',
		},
		{
			description: 'This website is used as the homepage for ASWNN and its various projects.  Deployed to the edge, this site serves as a hub to all other projects.',
			icon: '/img/img256/Cabin.png',
			image: '/img/apps/aswnn.png',
			metadata: [
				{ name: 'S3', type: 'V1 Server', url: 'https://aws.amazon.com/s3/' },
				{ name: 'jQuery', type: 'V1 Views', url: 'https://jquery.com/' },
				{ name: 'Bootstrap v3', type: 'V1 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'August 2015', type: 'V1 Released' },
				{ name: 'Sapper', type: 'V2 Server', url: 'https://sapper.svelte.dev/' },
				{ name: 'Netlify', type: 'V2 Hosting', url: 'https://www.netlify.com/' },
				{ name: 'Svelte', type: 'V2 Views', url: 'https://svelte.dev/' },
				{ name: 'Bootstrap v5', type: 'V2 Styling', url: 'https://getbootstrap.com/' },
				{ name: 'February 2021', type: 'V2 Released' },
			],
			title: 'ASWNN Homepage',
			url: 'https://asitewithnoname.com/',
		},
	];
	let isOpen = projects.map(() => false);
</script>

<section id="portfolio">
	<Container>
		<Row>
			<Col class="text-center">
				<h2>Projects</h2>
				<hr class="star-primary">
			</Col>
		</Row>
		<Row>
			{#each projects as project, index}
				<Project {...project} {index} onOpen={() => isOpen[index] = true} />
			{/each}
		</Row>
	</Container>
</section>


{#each projects as project, index}
	<ProjectModal {...project} {index} isOpen={isOpen[index]} toggle={() => isOpen[index] = !isOpen[index]} />
{/each}
