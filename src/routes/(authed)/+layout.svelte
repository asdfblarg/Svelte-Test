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
		position: fixed;
		top: 1.5em;
		right: 1em;
	}
</style>
