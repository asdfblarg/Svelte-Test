export const load = async ({ fetch, params }) => {
    const response = await fetch(`https://api.mangadex.org/manga/${params.title_id}?includes[]=artist&includes[]=author&includes[]=cover_art`)
    const jsonResponse = await response.json()

    return {
        jsonResponse
    }
}
