import dailyDigestSignUp from '../../../lib/daily-digest';

export function newsletter () {
	// TODO add logic here
	// possibly the same link as that used with coronavirus message?
	return Promise.resolve();
}

export function gift () {
	document.querySelector('.js-gift-article').dispatchEvent(new Event('click'));
}

export function app () {
	// TODO add logic here
	// have asked team if there's any HTTP API for sending emails
	return Promise.resolve();
}

export function dailyDigest () {
	return dailyDigestSignUp();
}
