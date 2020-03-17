function initClickToActionContent (banner, guruResult) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-cta-text]');
	const action = banner.messageElement.querySelector('[data-n-messaging-nba-cta-action]');

	text.innerHTML = guruResult.renderData.ctaHtml;
	action.innerText = guruResult.renderData.ctaActionText;
	action.setAttribute('href', guruResult.renderData.ctaActionHref);

	const content = banner.messageElement.querySelector('[data-n-messaging-nba-actual-content]');
	content.classList.remove('n-messaging-nba__content--hidden');
}

function initSuccessContent (banner, guruResult) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-success-text]');
	const action = banner.messageElement.querySelector('[data-n-messaging-nba-success-action]');

	text.innerHTML = guruResult.renderData.successHtml;
	action.innerText = guruResult.renderData.successActionText;
	action.setAttribute('href', guruResult.renderData.successActionHref);
}

function setView (banner, desiredViewId) {
	['cta', 'success', 'error'].forEach(function (viewId) {
		const view = banner.messageElement.querySelector(`[data-n-messaging-nba-view="${viewId}"]`);
		if (viewId === desiredViewId) {
			view.classList.remove('n-messaging-nba__view--hidden');
		} else {
			view.classList.add('n-messaging-nba__view--hidden');
		}
	});
}

function initClickToActionMessage (banner, guruResult, action) {
	initClickToActionContent(banner, guruResult);
	function handleClickToAction (evt) {
		evt.preventDefault();
		action()
			.then(function actionSuccess () {
				setView(banner, 'success');
			}).catch(function actionError () {
				setView(banner, 'error');
			});
		return false;
	}
	banner.messageElement.querySelector('[data-n-messaging-nba-cta-action]').addEventListener('click', handleClickToAction);
}

function initSuccessMessage (banner, guruResult) {
	initSuccessContent(banner, guruResult);
}

function initErrorMessage (banner) {
	function handleErrorAction (evt) {
		evt.preventDefault();
		setView(banner, 'cta');
		return false;
	}
	banner.messageElement.querySelector('[data-n-messaging-nba-error-action]').addEventListener('click', handleErrorAction);
}

export default function customSetup (banner, done, guruResult) {
	// TODO get this data from guru
	const newsletterName = 'Lex - Europe Morning Edition';
	guruResult = {
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Get the news you need delivered to your inbox, with the
					<span class="o-message__content-highlight-color">
						${newsletterName}
					</span>
					newsletter.
				</span>
			`,
			ctaActionText: 'Get the newsletter now',
			ctaActionHref: 'https://www.ft.com/newsletters',
			successHtml: `
				<span class="o-message__content-highlight">
					Great!
				</span>
				You're all signed up for the
				<span class="o-message__content-highlight">
					${newsletterName}.
				</span>
				Get more news delivered direct to your inbox with our other newsletters
			`,
			successActionText: 'Browse all newsletters',
			successActionHref: 'https://www.ft.com/newsletters'
		}
	};
	// TODO get the CTA action for this message from elsewhere (lib?)
	function action () {
		return Promise.resolve();
	}
	initClickToActionMessage(banner, guruResult, action);
	initSuccessMessage(banner, guruResult);
	initErrorMessage(banner);
	done();
};
