<script>
	// /** @type {import('./$types').PageData} */
	// export let data;

	let follows = {
		'c69b23ea-ceaf-4676-ab7b-8b4124184382': 'reading',
		'6088b204-aede-4b69-94f9-6678a7051526': 'reading',
		'456029c5-553c-4033-a41d-cdbd8873e234': 'reading',
		'a4242f1e-4fae-4dd5-a985-2236e5de0db3': 'reading',
		'37a338e3-1bd3-46f3-a3d3-705f674bcd7c': 'reading',
		'c934ceee-bea2-47b9-a55a-fadbb8b4bef0': 'reading',
		'7b4cae8f-1a5c-43ba-956f-f809449b0352': 'reading',
		'd890ccf5-f17a-43f6-bff1-91932cc89670': 'reading',
		'623e8602-ffa4-4538-86fc-5e776fdf5831': 'reading',
		'6cc0f7c2-0db6-432b-8189-fcedbcdda888': 'reading',
		'feaa2c8b-0232-4ec1-8c7d-90f4d2b68b88': 'reading',
		'ae3f621d-fe3f-4fa2-9249-dc27b2241437': 'reading',
		'bd935ca2-c9b6-4f2b-a3b3-77402d2337d8': 'reading',
		'ecba7d51-96cb-4f79-8de6-8e1eaf53acfd': 'reading',
		'f45b8a0f-be8f-4647-80bb-1796b923b52c': 'reading',
		'889bc077-15a8-401b-80b0-96ee7e60e65b': 'reading',
		'402cd859-464c-4731-8d16-86fefd3feecf': 'reading',
		'3c48f4af-7d64-422c-8d04-e61de1676333': 'reading',
		'7ad10953-14f2-411e-83e3-5c22c4e7e1e2': 'reading',
		'b43f7770-4da7-4744-a4bc-41c45e8f4052': 'reading',
		'da7c9890-edfe-4f20-9d20-c478a14252ec': 'reading',
		'27c025f4-d9f7-4ff7-bb43-2c5cc816fbb1': 'reading',
		'4281f322-fd47-45cb-95b7-9ca7b4e821cb': 'reading',
		'a476ce7f-2fb8-4f6f-8337-fa62ce5034fb': 'reading',
		'f27bf3b3-c8af-4030-9374-53539654c6a8': 'reading',
		'541aa653-9b2c-4bb3-bfb1-79151ec792f4': 'reading',
		'c9c4c773-1403-49f8-bd73-ca60611cb334': 'reading',
		'22122350-6d41-4c27-a043-a8457d52ff31': 'reading',
		'e86c4d93-ee4f-4626-9b8a-317562b5ca5c': 'reading',
		'abb55906-6cc8-4d30-a84d-f8fcc3ec7cc3': 'reading',
		'fd8389bf-91b6-4ff6-9e3f-36b44706cb41': 'reading',
		'5c412ddb-43fb-43ac-bdf2-d6c269d7cdc6': 'reading',
		'26dd4eae-1bf7-4834-986b-40914cbd5816': 'reading',
		'dab0f51c-9858-41bd-9087-dbe729cc55c0': 'reading',
		'd760153b-e492-4f82-8268-f98e1bf5a351': 'reading',
		'9dc7dc2b-8085-4840-a634-e479129922e0': 'reading',
		'ec14ec78-dfa1-49fc-91dd-ceff1fabb3a5': 'reading',
		'c904ac3b-6437-46f8-94cf-b21f72bc3f54': 'reading',
		'873a12b4-24c5-4486-af4c-d2caade9d86f': 'reading',
		'6f031994-db43-4396-aca5-a144470046ed': 'reading',
		'5726113f-bb82-41b2-ad22-baa286a5faf4': 'reading',
		'7ec67dd5-914f-4e9e-9eaf-720029223b4a': 'reading',
		'461bc2a9-34eb-4c1c-be38-2fabb53e4b3f': 'reading',
		'35a02480-b71d-4aae-9a29-b53d50fb6309': 'reading',
		'30b461c7-2675-497a-ab14-f36dad105519': 'reading',
		'f40fb22b-8e60-4184-8b72-7b716b043e22': 'reading'
	};

	let followsList = Object.entries(follows);

	const pageItemLimit = 20;
	let numChunks = followsList.length / pageItemLimit;
	let pageItemChunks = [];
	for (let i = 0; i < numChunks; i++) {
		pageItemChunks.push(followsList.slice(i * pageItemLimit, (i + 1) * pageItemLimit));
	}

	let currentPage = 0;
	let lastPage = Math.ceil(numChunks)-1;

	function decrementPage() {
		if (currentPage > 0) {
			currentPage = currentPage - 1;
		}
	}
	function incrementPage() {
		if (currentPage < numChunks - 1) {
			currentPage = currentPage + 1;
		}
	}

	function disablePrev(currentPage) {
		return currentPage == 0;
	}
	function disableNext(currentPage) {
		return currentPage == lastPage;
	}

	let numLastChunkEmptyRows = pageItemLimit - pageItemChunks[lastPage].length;
</script>

<div class="content-background">
	<div class="content">
		<code>
			<!-- <ol>
				{#each pageItemChunks as pageItemChunk, page}
					<li>
						<ul>
							{#each pageItemChunk as follow, chunkIndex}
								<li>{page * pageItemLimit + chunkIndex + 1}: {follow[1]} - {follow[0]}</li>
							{/each}
						</ul>
					</li>
					<br />
				{/each}
			</ol> -->
			{#each pageItemChunks[currentPage] as follow, chunkIndex}
				{currentPage * pageItemLimit + (chunkIndex + 1) < 10 ? '0' : ''}{currentPage *
					pageItemLimit +
					chunkIndex +
					1}: {follow[1]} - {follow[0]}<br />
			{/each}
			<!-- for last page add empty space to keep pages at same spot -->
			{#if currentPage==lastPage}
				{#each Array(numLastChunkEmptyRows) as i}
					<br>
				{/each}
			{/if}
		</code>
		<div class="content">

			<button on:click={decrementPage} disabled={disablePrev(currentPage)}>prev</button>
			<span> {currentPage + 1} out of {lastPage+1} </span>
			<button on:click={incrementPage} disabled={disableNext(currentPage)}>next</button>
		</div>
	</div>
</div>

<style>
	.content-background {
		background-color: white;
		padding-top: 1em;
		padding-bottom: 4em;
		margin: 5em;
		/* display: flex; */
		/* flex-direction: column; */
		/* justify-content: center; */
	}
	.content {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		padding-top: 0.5em;
	}
</style>
