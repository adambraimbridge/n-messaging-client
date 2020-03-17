import dailyDigestSignUp from '../../../lib/daily-digest';

export function newsletter (guruResult) {
	const url = guruResult.renderData.ctaActionHref;
	return fetch(url)
		.then(function handleResponse (res) {
			if (!res.ok) {
				throw new Error('could not subscribe to newsletter');
			}
		});
}

export function gift () {
	document.querySelector('.js-gift-article').dispatchEvent(new Event('click'));
}

export function app () {
	// logic is implemented in the Envoy journey via the action tracking event
	return Promise.resolve();
}

export function dailyDigest () {
	return dailyDigestSignUp();
}
