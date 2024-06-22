<script>
	export let data;
	export let form;
	console.log('data', data);
	// console.log('form', form);

	let loggingInMsg;
	function loggingIn(){
		loggingInMsg = "Logging in!"
	}
</script>

<div class="content-background">
	<div class="content">
		<div class="text">Login</div>

		<form method="POST">
			<div class="container">
				<label>
					Username:
					<input name="username" type="username" value={form?.username ?? ''} />
				</label>
				<label>
					Password:
					<input name="password" type="password" />
				</label>
			</div>
			<div class="container">
				<button on:click={loggingIn}>Login</button>
			</div>
		</form>
		{#if form?.error}
			<p class="error">Login Failed!</p>
			<pre><code>{JSON.stringify(form.error, null, 2)}</code></pre>
		{/if}
		{#if loggingInMsg}
			<p class="loggingIn">{loggingInMsg}</p>
		{/if}
	</div>
</div>

<style>
	.content-background {
		background-color: white;
		padding-top: 5em;
		padding-bottom: 25em;
		margin: 5em;
		display: flex;
		justify-content: center;
	}
	.text {
		font-family: Arial, Helvetica, sans-serif;
		font-size: xx-large;
		padding: 2em;
	}
	button {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		background-color: rgb(89, 182, 221);
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 1em;
	}
	label {
		margin-top: 1em;
	}
	.container {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.error, .loggingIn {
		color: red;
		font-size: x-large;
	}
	pre {
		background-color: darkgray;
		padding: 1em;
	}
</style>
