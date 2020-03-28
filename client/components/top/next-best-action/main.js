import * as copy from './copy';
import * as actions from './actions';

function initClickToActionContent (banner, data) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-cta-text]');
	text.innerHTML = data.renderData.ctaHtml;

	const action = banner.messageElement.querySelector('[data-n-messaging-nba-cta-action]');
	action.innerText = data.renderData.ctaActionText;
	const href = data.renderData.ctaActionHref;
	if (href) {
		action.setAttribute('href', href);
	}
	const icon = data.renderData.ctaActionIcon;
	if (icon) {
		// note: don't forget to add any new icon to the icon list in .scss
		action.classList.add('o-buttons--primary', 'o-buttons--inverse', 'o-buttons-icon', `o-buttons-icon--${icon}`);
	}

	const content = banner.messageElement.querySelector('[data-n-messaging-nba-actual-content]');
	content.classList.remove('n-messaging-nba__content--hidden');
}

function initSuccessContent (banner, data) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-success-text]');
	text.innerHTML = data.renderData.successHtml;

	const action = banner.messageElement.querySelector('[data-n-messaging-nba-success-action]');
	const actionText = data.renderData.successActionText;
	if (actionText) {
		action.innerText = actionText;
		action.setAttribute('href', data.renderData.successActionHref);
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

function initClickToActionMessage (banner, data, action) {
	initClickToActionContent(banner, data);
	function handleClickToAction (evt) {
		evt.preventDefault();
		action(data)
			.then(function showSuccessView () {
				setView(banner, 'success');
			}).catch(function showErrorView () {
				setView(banner, 'error');
			});
		return false;
	}
	banner.messageElement.querySelector('[data-n-messaging-nba-cta-action]').addEventListener('click', handleClickToAction);
}

function initSuccessMessage (banner, data) {
	initSuccessContent(banner, data);
function initCloseAction (banner) {
	function handleClickToClose (evt) {
		evt.preventDefault();
		setView(banner, 'none');
		return false;
	}
	banner.messageElement.querySelector('[data-n-messaging-nba-close-action]').addEventListener('click', handleClickToClose);
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
	const guruData = guruResult.renderData;
	const allData = copy[guruData.nbaMessageId](guruData);

	if (allData.hasSuccessMessage) {
		// a more dynamic message with one-click capability, success and error messaging
		const action = actions[guruData.nbaMessageId];
		initClickToActionMessage(banner, allData, action);
		initSuccessMessage(banner, allData);
		initCloseAction(banner);
		initErrorMessage(banner);
	} else {
		// a less dynamic message with a simple click-to-action link
		initClickToActionContent(banner, allData);
	}
	done();
};
