import { CookieOptions } from 'express-serve-static-core';

export function getCookieOptions(): CookieOptions {
	let secure = false;
	let sameSite: CookieOptions['sameSite'] = false;

	if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
		secure = true;
		sameSite = 'none';
	}

	return {
		sameSite,
		secure,
	};
}
