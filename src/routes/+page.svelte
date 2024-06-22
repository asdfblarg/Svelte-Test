<script>
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/vatoto');
	}
</script>

<div class="content-background">
	<div class="content">
		<div class="text">Checkout Vatoto</div>
		<div class="container">
			<button on:click={handleClick}>Click here</button>
		</div>
	</div>
</div>

<style>
	.content-background {
		/* min-height: 85vh;
		background-color: white;
		margin: 2em;
		width: fit-content;
		min-width: 950px; */

        background-color: white;
		padding-top: 5em;
		padding-bottom: 25em;
		margin: 5em;
		display: flex;
		justify-content: center;
	}
	.container {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
	.text {
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		font-size: xx-large;
		padding-top: 2em;
        padding-bottom: 1em;
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
	}
</style>
