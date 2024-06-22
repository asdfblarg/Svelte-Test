import { redirect, fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, url, request, fetch }) => {
        const data = await request.formData();

        let username = data.get("username");
        let password = data.get("password");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "password": password,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("https://api.mangadex.org/auth/login", requestOptions)
            .then(response => response.json())
            .then(result => { return result })
            .catch(error => console.log('error', error));

        if (response.result == 'error') {
            return fail(400, { username, error: response.errors });
        }

        cookies.set('session_token', `${response['token']['session']}`, { path: '/follows' });
        cookies.set('refresh_token', `${response['token']['refresh']}`, { path: '/follows' });
        cookies.set('expiresAt', `${Date.now() + (15 * 60 * 1000) - 15}`, { path: '/follows' });

        cookies.set('logged_in', 'true', { path: '/follows' });
        throw redirect(303, url.searchParams.get('redirectTo') ?? '/follows');
    }
};
