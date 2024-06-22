<script>
	import { page } from '$app/stores';
</script>

<div class="content-background">
	<h1>{$page.status}: {$page.error.message}</h1>
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
</style>
