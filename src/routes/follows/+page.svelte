<script>
	export let data;
	let followsList = data.followsResponse.statuses;
	let numFollows = Object.keys(followsList).length;
</script>

{#if data.cookies}
	<form method="POST" action="/logout">
		<button>log out</button>
	</form>
{/if}

<div class="content-background">
	<div class="content">
		<div class="text">Follows page</div>
		{#if numFollows}
			<p>You have a total of <strong>{numFollows}</strong> series followed!</p>
		{/if}
		{#if followsList}
			<pre><code>{JSON.stringify(followsList, null, 2)}</code></pre>
		{/if}
	</div>
</div>

<style>
	.content-background {
		background-color: white;
		padding-top: 5em;
		padding-bottom: 4em;
		margin: 5em;
		display: flex;
		justify-content: center;
	}
	.text {
		font-family: Arial, Helvetica, sans-serif;
		font-size: xx-large;
		padding: 1em;
        text-align: center;
	}
	form {
		position: fixed;
		top: 1.5em;
		right: 1em;
	}
	pre {
		background-color: darkgray;
		padding: 1em;
        max-height: 30em;
        overflow: scroll;
        width: 100%;
	}
    p {
        font-family: Arial, Helvetica, sans-serif;
		font-size: large;
        text-align: center;
    }
</style>
