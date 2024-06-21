<script>
	/** @type {import('./$types').PageData} */
	import SvelteMarkdown from 'svelte-markdown';

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

	const relationshipObjList = {};
	relationships.forEach((relationship) => {
		if (relationshipObjList[relationship.type]) {
			relationshipObjList[relationship.type].push(relationship);
		} else {
			relationshipObjList[relationship.type] = [relationship];
		}
	});

	const tagsList = [];
	tags.forEach((tag) => {
		let tagName = (tag.attributes.name.en = Object.values(tag.attributes.name)[0]);
		tagsList.push(tagName);
	});
	tagsList.sort();

	let defaultTitle = title.en || Object.values(title)[0];
	let mdUrlSlug = defaultTitle
		.toLocaleLowerCase()
		.replace(/[^a-z10-9-]+/g, '-')
		.replace(/^[\s-]+|[\s-]+$/g, '');
	let mdTitleUrl = `https://mangadex.org/title/${id}/${mdUrlSlug}`;
	let coverURL = `https://mangadex.org/covers/${id}/${relationshipsMap.get('cover_art').attributes.fileName}`;

	const altTitlesList = [];
	altTitles.forEach((element) => {
		for (const [key, value] of Object.entries(element)) {
			altTitlesList.push(value);
		}
	});

	const defaultDescription = Object.values(description)[0];
	const source = defaultDescription;
</script>

<input type="text" />

<style>
	input {
		
	}
</style>
