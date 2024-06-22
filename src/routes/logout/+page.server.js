import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('session_token', { path: '/follows' });
        cookies.delete('refresh_token', { path: '/follows' });
        cookies.delete('expiresAt', { path: '/follows' });
		
		cookies.delete('logged_in', { path: '/follows' });
		throw redirect(303, '/login');
	}
};
