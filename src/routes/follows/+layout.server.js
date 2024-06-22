import { redirect } from '@sveltejs/kit';

export async function load({ cookies, url }) {
	if (!cookies.get('logged_in')) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	} else {
		const session_token = cookies.get('session_token');
		const refresh_token = cookies.get('refresh_token');
		const expiresAt = cookies.get('expiresAt');

		// refresh token
		if (Date.now() > expiresAt) {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("Authorization", `Bearer ${session_token}`);

			const raw = JSON.stringify({
				"token": refresh_token
			});

			const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			const response = await fetch("https://api.mangadex.org/auth/refresh", requestOptions)
				.then(response => response.json())
				.then(result => { return result })
				.catch(error => console.log('error', error));

			// if (response.result == 'error') {
			// 	return fail(400, { username, error: response.errors });
			// }

			cookies.set('session_token', `${response['token']['session']}`, { path: '/follows' });
			cookies.set('refresh_token', `${response['token']['refresh']}`, { path: '/follows' });
			cookies.set('expiresAt', `${Date.now() + (15 * 60 * 1000) - 15}`, { path: '/follows' });
		}

		const followsResponse = await fetch("https://api.mangadex.org/manga/status", {
			"headers": {
				"authorization": `Bearer ${session_token}`,
			}
		}).then((response) => { return response.json() })

		return { cookies: true, followsResponse: followsResponse}
	}
}
