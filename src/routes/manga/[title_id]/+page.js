export const load = async ({ fetch, params }) => {

    // const mdApiFetch = async () => {   
    //     const response = await fetch('https://api.mangadex.org/manga/8280b28c-aeff-4f89-ac99-a4c783e14782?includes[]=artist&includes[]=author&includes[]=cover_art')
    //     const jsonResponse = await response.json()
    //     console.log("jsonResponse:",jsonResponse)
    //     return jsonResponse
    // }

    // let jsonResponse;

	// async function mdApiFetch = async () => {
	// 	const response = await fetch('https://api.mangadex.org/manga/8280b28c-aeff-4f89-ac99-a4c783e14782?includes[]=artist&includes[]=author&includes[]=cover_art');
	// 	jsonResponse = await response.json();
	// }

    const response = await fetch(`https://api.mangadex.org/manga/${params.title_id}?includes[]=artist&includes[]=author&includes[]=cover_art`)
    const jsonResponse = await response.json()
    // console.log("jsonResponse:", jsonResponse)

    return {
        jsonResponse
    }
}