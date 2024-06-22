<div class="background">
	<nav>
		<button class="navlogo navbtn">MangaDex Test</button>
		<button class="navbtn"><a href="/">Home</a></button>
		<button class="navbtn"><a href="/vatoto">Vatoto</a></button>
		<button class="navbtn"><a href="/about">About</a></button>
	</nav>

	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}
	.background {
		background-image: url('https://vatoto.com/forums/public/style_images/subway/patterns/shattered.png');
		background-color: rgb(51, 53, 53);
		min-height: 100vh;
		display: inline-block;
		width: 100%;
	}
	nav {
		display: flex;
		align-items: center;
		min-height: 4rem;

		background-image: url('https://vatoto.com/forums/public/style_images/subway/patterns/shattered.png');
		background-color: rgb(89, 182, 221);
	}
	.navlogo {
		padding: 1em;
		font-size: 2rem;
	}
	nav a {
		padding: .75em;
		text-decoration: none;
		display: inline-block;
		font-size: 1rem;
		color: currentColor;
	}
	.navbtn {
		color: #d7dde4;
		font-size: 1.25rem;
		line-height: 1.75rem;
		border-width: 1px;
		border-color: transparent;
		background-color: transparent;
		color: currentColor;
		outline-color: currentColor;
	}
</style>
