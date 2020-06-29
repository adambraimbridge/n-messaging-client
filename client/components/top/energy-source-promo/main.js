const getCsrfToken = require('n-myft-ui/myft/ui/lib/get-csrf-token').default;
const energySourceNewsletterId = '5655d099e4b01077e911d60f';

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

	return fetch(`/__myft/api/alerts/no-user-provided/newsletters/${energySourceNewsletterId}/subscribe`, options)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Could not subscribe to newsletter ${response.statusText}`);
			}

			return true;
		});
};

const setState = (banner, desiredState) => {
	const validStates = ['error', 'success', 'initial'];

	if (!validStates.includes(desiredState)) {
		throw new Error(`Attempted to set invalid state on banner: ${desiredState}`);
	}

	banner.messageElement.dataset.state = desiredState;

	validStates.forEach(state => {
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
	const closeButton = banner.messageElement.querySelector('.o-message__close');

	// HACK this is a hack to prevent the close event firing from this banner
	// the close button is only shown on confirmation and error, so we don't
	// want to treat it as a close action
	// however this solution is very brittle and will break if the o-banner
	// class names ever change
	banner.close = () => {
		banner.messageElement.classList.add('o-banner--closed');
	};

	if (submitButton) {
		submitButton.addEventListener('click', () => {
			subscribeToNewsletter()
				.then(() => {
					banner.messageElement.dispatchEvent(new CustomEvent('oTracking.event', {
						detail: {
							category: 'newsletter-subscribe',
							action: 'success',
							newsletterId: energySourceNewsletterId,
						},
						bubbles: true,
					}));
					setState(banner, 'success');
				}).catch(error => {
					banner.messageElement.dispatchEvent(new CustomEvent('oTracking.event', {
						detail: {
							category: 'newsletter-subscribe',
							action: 'error',
							newsletterId: energySourceNewsletterId,
							errorMessage: error.message,
						},
						bubbles: true,
					}));

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
