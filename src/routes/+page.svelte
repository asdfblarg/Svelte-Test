<script>
	export let data;
	const { jsonResponse } = data;
	let { id, type, attributes, relationships } = jsonResponse.data;
	let {
		title,
		altTitles,
		availableTranslatedLanguages,
		contentRating,
		description,
		links,
		originalLanguage,
		publicationDemographic,
		updatedAt,
		status,
		tags
	} = attributes;

	const relationshipsMap = new Map();
	relationships.map((relationship) => {
		relationshipsMap.set(relationship.type, relationship);
	});

	let defaultTitle = title.en || Object.values(title)[0];
	let mdUrlSlug = defaultTitle
		.toLocaleLowerCase()
		.replace(/[^a-z10-9-]+/g, '-')
		.replace(/^[\s-]+|[\s-]+$/g, '');
	let mdTitleUrl = `https://mangadex.org/title/${id}/${mdUrlSlug}`;
    let coverURL = `https://mangadex.org/covers/${id}/${relationshipsMap.get('cover_art').attributes.fileName}`

</script>



<!-- <button on:click={JSON.stringify(mdApiFetch, null, 2)}>fetch</button> -->

<h1>Test</h1>
<p>I have no clue what I am doing</p>
<p>Graphic Design is not my passion</p>

<a href={mdTitleUrl}>{mdTitleUrl}</a><br />
<br />
<img
	src={coverURL}
	alt=""
/>

<ul>
	<li><pre><code>id={JSON.stringify(id, null, 2)}<code></code></code></pre></li>
	<li><pre><code>type={JSON.stringify(type, null, 2)}<code></code></code></pre></li>
	<li><pre><code>title={JSON.stringify(title, null, 2)}<code></code></code></pre></li>
	<li><pre><code>altTitles={JSON.stringify(altTitles, null, 2)}<code></code></code></pre></li>
	<li>
		<pre><code
				>availableTranslatedLanguages={JSON.stringify(availableTranslatedLanguages, null, 2)}<code
				></code></code
			></pre>
	</li>
	<li>
		<pre><code>contentRating={JSON.stringify(contentRating, null, 2)}<code></code></code></pre>
	</li>
	<li><pre><code>description={JSON.stringify(description, null, 2)}<code></code></code></pre></li>
	<li><pre><code>links={JSON.stringify(links, null, 2)}<code></code></code></pre></li>
	<li>
		<pre><code>originalLanguage={JSON.stringify(originalLanguage, null, 2)}<code></code></code
			></pre>
	</li>
	<li>
		<pre><code
				>publicationDemographic={JSON.stringify(publicationDemographic, null, 2)}<code></code></code
			></pre>
	</li>
	<li><pre><code>updatedAt={JSON.stringify(updatedAt, null, 2)}<code></code></code></pre></li>
	<li><pre><code>status={JSON.stringify(status, null, 2)}<code></code></code></pre></li>
	<li><pre><code>tags={JSON.stringify(tags, null, 2)}<code></code></code></pre></li>
	<li>
		<pre><code>relationships={JSON.stringify(relationships, null, 2)}<code></code></code></pre>
	</li>
</ul>

{#if jsonResponse !== undefined}
	<pre><code>response = {JSON.stringify(jsonResponse.data, null, 2)}</code></pre>
{/if}

<style>
	h1 {
		color: aqua;
	}
	pre {
		background-color: darkolivegreen;
		color: aquamarine;
		text-wrap: wrap;
		word-wrap: break-word;
		hyphens: none;
	}
	img {
		max-width: 20em;
	}
</style>
