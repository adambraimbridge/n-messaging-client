import * as copy from './copy';

function initClickToActionContent (banner, data) {
// 	// const header = banner.bannerElement.querySelector('[data-n-messaging-newsletter-model-promo-header]');
// 	// header.innerHTML = data.renderData.headerHtml;

	// 	// const body = banner.messageElement.querySelector('o-banner__heading');
	// 	// body.innerHTML = data.renderData.bodyHtml;

// 	// const action = banner.messageElement.querySelector('[data-n-messaging-newsletter-model-promo-cta-action]');
// 	// action.innerText = data.renderData.ctaActionText;
// 	// const href = data.renderData.ctaActionHref;
// 	// if (href) {
// 	// 	action.setAttribute('href', href);
// 	// }
}

export default function customSetup (banner, done, guruResult) {
	const guruData = guruResult.renderData;
	const allData = copy.newsletter(guruData);
	initClickToActionContent(banner, allData);

	// const action = actions[guruData.nbaMessageId];
	// if (allData.hasSuccessMessage) {
	// 	// dynamic click-to-action with success/follow-up messaging
	// 	initClickToAction(banner, allData, action, true);
	// 	initSuccessContent(banner, allData);
	// 	initCloseAction(banner);
	// 	initErrorMessage(banner);
	// } else if (action) {
	// 	// dynamic click-to-action without any success/follow-up messaging (e.g. show gift modal)
	// 	initClickToAction(banner, allData, action, false);
	// }
	done();
};
