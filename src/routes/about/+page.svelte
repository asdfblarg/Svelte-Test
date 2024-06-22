<script>
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/vatoto');
	}
</script>

<div class="content-background">
	<div class="content">
		<div class="text">Just testing stuff out</div>
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
</style>
