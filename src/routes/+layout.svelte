<div class="background">
	<nav>
		<button class="navlogo navbtn">MangaDex Test</button>
		<button class="navbtn"><a href="/">Home</a></button>
		<button class="navbtn"><a href="/about">About</a></button>
		<button class="navbtn"><a href="/vatoto">Vatoto</a></button>
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
		/* display: inline-block; */
		display: inline-block;
		width: 100%;
		/* min-width: 1200px; */
	}
	nav {
		/* background-color: #e5e6e6; */
		display: flex;
		align-items: center;
		/* padding: 0.5rem; */
		min-height: 4rem;
		/* width: 100%; */
		/* border-radius: 1em; */

		background-image: url('https://vatoto.com/forums/public/style_images/subway/patterns/shattered.png');
		background-color: rgb(89, 182, 221);
		/* overflow: hidden; */
	}
	.navlogo {
		padding: 1em;
	}
	nav a {
		padding: .75em;
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
