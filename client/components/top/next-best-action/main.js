// TODO remove this mock when guru is ready with the needed data
import * as copy from './copy';
import * as actions from './actions';

function initClickToActionContent (banner, guruResult) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-cta-text]');
	text.innerHTML = guruResult.renderData.ctaHtml;

	const action = banner.messageElement.querySelector('[data-n-messaging-nba-cta-action]');
	action.innerText = guruResult.renderData.ctaActionText;
	const href = guruResult.renderData.ctaActionHref;
	if (href) {
		action.setAttribute('href', href);
	}
	const icon = guruResult.renderData.ctaActionIcon;
	if (icon) {
		// note: don't forget to add any new icon to the icon list in .scss
		action.classList.add('o-buttons--primary', 'o-buttons--inverse', 'o-buttons-icon', `o-buttons-icon--${icon}`);
	}

	const content = banner.messageElement.querySelector('[data-n-messaging-nba-actual-content]');
	content.classList.remove('n-messaging-nba__content--hidden');
}

function initSuccessContent (banner, guruResult) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-success-text]');
	text.innerHTML = guruResult.renderData.successHtml;

	const action = banner.messageElement.querySelector('[data-n-messaging-nba-success-action]');
	const actionText = guruResult.renderData.successActionText;
	if (actionText) {
		action.innerText = actionText;
		action.setAttribute('href', guruResult.renderData.successActionHref);
	} else {
		// nothing to follow up with
		action.classList.add('n-messaging-nba__action--hidden');
	}
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

function initClickToActionMessage (banner, guruResult, action, trackEventAction) {
	initClickToActionContent(banner, guruResult);
	function handleClickToAction (evt) {
		evt.preventDefault();
		action(guruResult)
			.then(function trackSuccess () {
				trackEventAction('act', guruResult.messageId);
			})
			.then(function showSuccessView () {
				setView(banner, 'success');
			}).catch(function showErrorView () {
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

export default function customSetup (banner, done, guruResult, trackEventAction) {
	// TODO remove these mock when guru is ready with the needed data
	const messageId = 'newsletter';
	const data = {
		newsletterName: 'Lex - Europe Morning Edition',
		newsletterId: '5e67775d8bb28f00049b0f76' // note this is ID for the coronavirus newsletter!
	};

	const messageCopy = copy[messageId](data);

	if (messageCopy.hasSuccessMessage) {
		// a more dynamic message with one-click capability, success and error messaging
		const action = actions[messageId];
		initClickToActionMessage(banner, messageCopy, action, trackEventAction);
		initSuccessMessage(banner, messageCopy);
		initErrorMessage(banner);
	} else {
		// a more static message with a simple click-to-action link
		initClickToActionContent(banner, messageCopy);
	}
	done();
};
