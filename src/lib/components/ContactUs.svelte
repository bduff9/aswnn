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
	    Alert,
	    Button,
	    Col,
	    Container,
	    Form,
	    FormGroup,
	    Input,
	    Label,
	    Row,
	} from '@sveltestrap/sveltestrap';
	import { field, form } from 'svelte-forms';
	import { min, required, email as validEmail } from 'svelte-forms/validators';

	import { encode } from '../utilities';

	let name = '';
	let nameDirty = false;
	let email = '';
	let emailDirty = false;
	let phone = '';
	let phoneDirty = false;
	let message = '';
	let messageDirty = false;
	let honeypot = '';
	let submitted = false;
	let submitError = '';

	const fullName = () => {
		return (value: string) => ({
			name: 'fullName',
			valid: value.includes(' '),
		});
	};

	const phoneNumber = () => {
		return (value: string) => ({
			name: 'phoneNumber',
			valid: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
				value
			),
		});
	};

	const fieldOptions =
		{
			checkOnInit: false,
			validateOnChange: true,
			stopAtFirstError: false,
		};
	const nameInput = field('name', name, [fullName(), required()], fieldOptions);
	const emailInput = field('email', email, [validEmail(), required()], fieldOptions);
	const phoneInput = field('phone', phone, [phoneNumber(), required()], fieldOptions);
	const messageInput = field('message', message, [min(15), required()], fieldOptions);
	const cForm = form(
		nameInput, emailInput, phoneInput, messageInput,
	);

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contactUs',
				name,
				email,
				phone,
				message,
				zipCode: honeypot,
				subject: 'New ASWNN Contact Us Form Submission',
			}),
		})
			.then(() => {
				name = '';
				nameDirty = false;
				email = '';
				emailDirty = false;
				phone = '';
				phoneDirty = false;
				message = '';
				messageDirty = false;
				honeypot = '';
				submitted = true;
			})
			.catch(
				(error: string) => {
					(submitError = `There was an error submitting your request, please try again.  Details: ${error}`);
				}
			);
	};
</script>

<section id="contact">
	<Container>
		<Row>
			<Col lg="12" class="text-center">
				<h2>Contact Us</h2>
				<hr class="star-primary" />
			</Col>
		</Row>
		<Row>
			<Col lg={{ size: 8, offset: 2 }}>
				<Form
					name="contactUs"
					id="contactForm"
					autocomplete="off"
					on:submit={handleSubmit}
				>
					<FormGroup
						class="floating-label-form-group{name
							? ' floating-label-form-group-with-value'
							: ''}"
					>
						<Label for="name">Name</Label>
						<Input
							type="text"
							placeholder="Name"
							id="name"
							name="name"
							required
							autocomplete="off"
							bind:value={name}
							on:blur={() => (nameDirty = true)}
						/>
						<p class="text-danger help-block">
							{#if nameDirty && $cForm.hasError('name.required')}
								Please enter your name
							{:else if nameDirty && $cForm.hasError('name.fullName')}
								Please enter your first and last name
							{/if}
						</p>
					</FormGroup>
					<FormGroup
						class="floating-label-form-group{email
							? ' floating-label-form-group-with-value'
							: ''}"
					>
						<Label for="email">Email Address</Label>
						<Input
							type="email"
							placeholder="Email Address"
							id="email"
							name="email"
							required
							autocomplete="off"
							bind:value={email}
							on:blur={() => (emailDirty = true)}
						/>
						<p class="help-block text-danger">
							{#if emailDirty && $cForm.hasError('email.required')}
								Please enter your email address
							{:else if emailDirty && $cForm.hasError('email.email')}
								Please enter a valid email address
							{/if}
						</p>
					</FormGroup>
					<FormGroup
						class="floating-label-form-group{phone
							? ' floating-label-form-group-with-value'
							: ''}"
					>
						<Label for="phone">Phone Number</Label>
						<Input
							type="tel"
							placeholder="Phone Number"
							name="phone"
							id="phone"
							autocomplete="off"
							bind:value={phone}
							on:blur={() => (phoneDirty = true)}
						/>
						<p class="help-block text-danger">
							{#if phoneDirty && $cForm.hasError('phone.required')}
								Please enter your phone number
							{:else if phoneDirty && $cForm.hasError('phone.phoneNumber')}
								Please enter a valid phone number
							{/if}
						</p>
					</FormGroup>
					<FormGroup
						class="floating-label-form-group{message
							? ' floating-label-form-group-with-value'
							: ''}"
					>
						<Label for="message">Message</Label>
						<Input
							type="textarea"
							rows={5}
							placeholder="Message"
							id="message"
							name="message"
							autocomplete="off"
							bind:value={message}
							on:blur={() => (messageDirty = true)}
						/>
						<p class="help-block text-danger">
							{#if messageDirty && $cForm.hasError('message.required')}
								Please enter a message
							{:else if messageDirty && $cForm.hasError('message.min')}
								Please enter a message of at least 15 characters
							{/if}
						</p>
					</FormGroup>
					<br />
					{#if submitted}
						<Alert color="success" isOpen
							>Thank you for your request, someone will reach out to you shortly</Alert
						>
					{:else if submitError}
						<Alert color="danger" isOpen>{submitError}</Alert>
					{/if}
					<FormGroup>
						<Input
							type="text"
							name="zipCode"
							autocomplete="off"
							style="display: none;"
							bind:value={honeypot}
						/>
						<Button
							type="submit"
							size="lg"
							color="success"
							disabled={!$cForm.valid || submitted}>Send</Button
						>
					</FormGroup>
				</Form>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	@import '../../../scss/variables.scss';
	:global(.floating-label-form-group) {
		position: relative;
		margin-bottom: 0;
		padding-bottom: 0.5em;
		border-bottom: 1px solid $gray-lighter;

		&:first-child {
			border-top: 1px solid $gray-lighter;
		}

		&:focus-within {
			color: $success;
		}

		:global(input),
		:global(textarea) {
			z-index: 1;
			position: relative;
			padding-right: 0;
			padding-left: 0;
			border: none;
			border-radius: 0;
			font-size: 1.5em;
			background: none;
			box-shadow: none !important;
			resize: none;
		}

		:global(label) {
			display: block;
			z-index: 0;
			position: relative;
			top: 2em;
			margin: 0;
			font-size: 0.85em;
			line-height: 1.764705882em;
			opacity: 0;
			-webkit-transition: top 0.3s ease, opacity 0.3s ease;
			-moz-transition: top 0.3s ease, opacity 0.3s ease;
			-ms-transition: top 0.3s ease, opacity 0.3s ease;
			transition: top 0.3s ease, opacity 0.3s ease;
		}
	}

	:global(.floating-label-form-group-with-value) {
		:global(label) {
			top: 0;
			opacity: 1;
		}
	}
</style>
