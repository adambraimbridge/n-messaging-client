export function newsletter () {
	return Promise.resolve();
}

export function gift () {
	document.querySelector('.js-gift-article').dispatchEvent(new Event('click'));
}
