const cookies = require('js-cookie');

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const POPUP_PROMPT_COOKIE_NAME = 'popupPromptShown';

export default function (banner, done) {
	const timeSet = cookies.get(POPUP_PROMPT_COOKIE_NAME);

	if (timeSet === undefined) {
		const expiryDate = new Date(new Date().getTime() + 10 * ONE_DAY_MS);
		cookies.set(POPUP_PROMPT_COOKIE_NAME, 'OK', { domain: 'ft.com', expires: expiryDate });
		banner.open();
	}

	return done({ skip: true });
}
