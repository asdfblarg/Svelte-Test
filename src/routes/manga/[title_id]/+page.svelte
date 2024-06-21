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

	let altTitlesList = [];
	altTitles.forEach((element) => {
		for (const [key, value] of Object.entries(element)) {
			altTitlesList.push(key + '||' + value);
		}
	});
	altTitlesList.sort();

	const defaultDescription = Object.values(description)[0];
	const source = defaultDescription;
</script>

<div class="backgroundFront">
	<br />
	<br />
	<!-- <a href={mdTitleUrl}>MD link</a> -->
	<h1 style="max-width: 70%; margin-left: 65px">{defaultTitle}</h1>
	<div class="ipsBox" style="max-width: 1200px;">
		<div style="position: relative;">
			<div style="width: 300px; float: right; text-align: center; padding: 10px;">
				<img src={coverURL} style="max-width: 280px; max-height: 500px;" alt="" />
			</div>
			<div style="width: auto; margin-right: 320px;">
				<table class="ipb_table" style="width: 100%;" width="100%">
					<tbody>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top"
								>Alt Names:</td
							>
							<td>
								{#each altTitlesList as altTitle}
									<span style="margin-right: 12px; display: inline-block;">
										<img
											src="https://vatoto.com/forums/public/style_images/Cielo/bullet_black.png"
											alt="alt"
										/>
										{altTitle.split('||').pop()}
									</span>
								{/each}
							</td>
						</tr>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top">Author:</td
							>
							<td>
								{#each relationshipObjList.author as author}
									<span>{author.attributes.name}</span>
								{/each}
							</td>
						</tr>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top">Artist:</td
							>
							<td>
								{#each relationshipObjList.artist as artist}
									<span>{artist.attributes.name}</span>
								{/each}
							</td>
						</tr>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top">Genres:</td
							>
							<td>
								{#each tagsList as tag}
									<span style="margin-right: 12px; display: inline-block;" title="Tag Description">
										<img
											src="https://vatoto.com/forums/public/style_images/master/bullet_black.png"
											alt={tag}
										/>
										{tag}
									</span>
								{/each}
							</td>
						</tr>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top">Origin:</td
							>
							<td>{originalLanguage.toLocaleUpperCase()}</td>
						</tr>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top">Status:</td
							>
							<td>{status}</td>
						</tr>
						<tr class="">
							<td style="width: 20%; font-weight: bold; text-align: right;" valign="top"
								><p>Description:</p></td
							>
							<td><SvelteMarkdown {source} /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
	.backgroundFront {
		min-height: 85vh;
		background-color: white;
		margin: 2em;
		max-width: 70%;

	}
	h1 {
		font-family: Helvetica, Arial, sans-serif;
		font-weight: normal;
		color: rgb(50, 50, 50);
		font-size: 26px;
	}
	td {
		font-family: Helvetica, Arial, sans-serif;
		font-size: 13px;
		font-weight: 400;
		color: rgb(90, 90, 90);
		padding: 10px;
	}
	span {
		color: rgb(51, 51, 51);
	}
</style>
