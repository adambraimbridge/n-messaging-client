import getCsrfToken from 'n-myft-ui/myft/ui/lib/get-csrf-token';
import dailyDigestSignUp from '../../../lib/daily-digest';

/**
 * These actions are the action in CTA (Call To Action).
 * They should return a promise, upon which the message will either
 * close or switch to a success message.
 * They can also return a rejection, which will cause the message to
 * show an error message.
 */

export function newsletter (guruResult) {
	// subscribe to newsletter using the myFT API
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
	// show the gift modal
	document.querySelector('.js-gift-article').dispatchEvent(new Event('click'));
	return Promise.resolve();
}

export function app () {
	// email the user links
	// (emailing logic is implemented in the Envoy journey
	// via the action tracking event)
	return Promise.resolve();
}

export function dailyDigest () {
	// sign user up to daily digest
	return dailyDigestSignUp();
}
