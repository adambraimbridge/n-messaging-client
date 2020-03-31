import getCsrfToken from 'n-myft-ui/myft/ui/lib/get-csrf-token';
import dailyDigestSignUp from '../../../lib/daily-digest';

export function newsletter (guruResult) {
	const fetchOptions = {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			accept: 'application/json'
		},
		body: JSON.stringify({
			token: getCsrfToken()
		})
	};
	return fetch(guruResult.renderData.ctaActionHref, fetchOptions)
		.then(function handleResponse (res) {
			if (!res.ok) {
				throw new Error('could not subscribe to newsletter');
			}
		});
}

export function gift () {
	document.querySelector('.js-gift-article').dispatchEvent(new Event('click'));
	return Promise.resolve();
}

export function app () {
	// logic is implemented in the Envoy journey via the action tracking event
	return Promise.resolve();
}

export function dailyDigest () {
	return dailyDigestSignUp();
}
