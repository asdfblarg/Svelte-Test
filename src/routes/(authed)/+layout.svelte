<script>
	export let data;
</script>

<slot />

{#if data.cookies}
	<form method="POST" action="/logout">
		<button>log out</button>
	</form>
{/if}

<style>
	form {
		position: absolute;
		top: 1em;
		right: 1em;
	}
	button {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		background-color: transparent;
		border: 1px solid;
		padding: 0.5em;
		text-align: center;
		font-size: 1em;
	}
	button:hover {
		background-color: rgb(84, 120, 196);
		border-color: black;
		color: rgb(216, 226, 193);
	}
</style>
