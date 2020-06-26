const getCsrfToken = require('n-myft-ui/myft/ui/lib/get-csrf-token').default;

const subscribeToNewsletter = () => {
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			token: getCsrfToken(),
		}),
	};

	return fetch('/__myft/api/alerts/no-user-provided/newsletters/5655d099e4b01077e911d60f/subscribe', options)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Could not subscribe to newsletter ${response.statusText}`);
			}

			return true;
		});
};

const setState = (banner, desiredState) => {
	if (!['error', 'success', 'initial'].includes(desiredState)) {
		return;
	}

	banner.messageElement.dataset.state = desiredState;

	['error', 'success', 'initial'].forEach(state => {
		const contentEl = banner.messageElement.querySelector(`.energy-source-promo__content--${state}`);

		if (state === desiredState) {
			contentEl.classList.remove('hidden');
		} else {
			contentEl.classList.add('hidden');
		}
	});
};

module.exports = function customSetup (banner, done) {
	const submitButton = banner.messageElement.querySelector('[data-o-message-action="subscribe"]');
	const closeButton = banner.messageElement.querySelector('[class*="__close"]');

	if (submitButton) {
		submitButton.addEventListener('click', () => {
			subscribeToNewsletter()
				.then(setState.bind(window, banner, 'success'))
				.catch(error => {
					setState(banner, 'error');
					// throw error so it can be caught by Sentry
					throw error;
				});
		});
	}

	if (closeButton) {
		closeButton.addEventListener('click', event => {
			event.preventDefault();
			banner.close();
		});
	}

	done();
};
