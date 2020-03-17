// TODO remove this mock when guru is ready with the needed data
import * as mockGuruData from './mock-guru-data';
import * as actions from './actions';

function initClickToActionContent (banner, guruResult) {
	const text = banner.messageElement.querySelector('[data-n-messaging-nba-cta-text]');
	const action = banner.messageElement.querySelector('[data-n-messaging-nba-cta-action]');

	text.innerHTML = guruResult.renderData.ctaHtml;
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
	// TODO remove this mock when guru is ready with the needed data
	guruResult = mockGuruData.gift();

	if (guruResult.isDynamicMessage) {
		const action = actions[guruResult.messageId];
		initClickToActionMessage(banner, guruResult, action);
		initSuccessMessage(banner, guruResult);
		initErrorMessage(banner);
	} else {
		initClickToActionContent(banner, guruResult);
	}
	done();
};
