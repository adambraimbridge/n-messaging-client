import { client as myft } from 'n-myft-ui/myft';
import getCsrfToken from 'n-myft-ui/myft/ui/lib/get-csrf-token';
import dailyDigestSignUp from '../../../lib/daily-digest';

export function newsletter (guruResult) {
	function getUserId () {
		// if there's a better way than using myFT, I'd like to know!
		return myft.init()
			.then(function withMyFt () {
				return myft.userId;
			});
	}
	function getNewsletterId (guruResult) {
		const urlParts = guruResult.renderData.ctaActionHref.split('/');
		return urlParts[urlParts.length - 2];
	}
	function getUrl (userId, newsletterId) {
		return `/__myft/api/alerts/${userId}/newsletters/${newsletterId}/subscribe`;

	}

	return getUserId()
		.then(function subscribeToNewsletter (userId) {
			const url = getUrl(userId, getNewsletterId(guruResult));
			return fetch(url, {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json'
				},
				body: JSON.stringify({
					token: getCsrfToken()
				})
			});
		})
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
