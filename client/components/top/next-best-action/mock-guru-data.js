export function newsletter () {
	const newsletterName = 'Lex - Europe Morning Edition';
	const newsletterId = '5e67775d8bb28f00049b0f76'; // note this is ID for the coronavirus newsletter!
	return {
		messageId: 'newsletter',
		isDynamicMessage: true,
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
			ctaActionHref: `https://ep.ft.com/newsletters/${newsletterId}/subscribe`,
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
}

export function myFtFeed () {
	return {
		messageId: 'myFtFeed',
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Explore your myFT feed now
				</span>
			`,
			ctaActionText: 'Explore your myFT feed now',
			ctaActionHref: 'https://www.ft.com/myft'
		}
	};
}

export function gift () {
	return {
		messageId: 'gift',
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Share this article with friends, family or colleagues, using
					<span class="o-message__content-highlight-color">
						Gift Articles
					</span>
				</span>
			`,
			ctaActionText: 'Gift this article now',
			ctaActionIcon: 'share'
		}
	};
}

export function app () {
	return {
		messageId: 'app',
		isDynamicMessage: true,
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Read FT articles on the go, offline, and get notifications as stories break with the
					<span class="o-message__content-highlight-color">
						mobile app.
					</span>
					Get a download link
				</span>
			`,
			ctaActionText: 'Email me a link now',
			ctaActionHref: 'https://www.ft.com/...',
			successHtml: `
				<span class="o-message__content-highlight">
					Great!
				</span>
				We've emailed you a download link.
			`
		}
	};
}

export function dailyDigest () {
	return {
		messageId: 'dailyDigest',
		isDynamicMessage: true,
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Get a summary of your followed topics with the
					<span class="o-message__content-highlight-color">
						myFT daily Email Digest
					</span>
				</span>
			`,
			ctaActionText: 'Sign up to Email Digest now',
			ctaActionHref: 'https://www.ft.com/myft/alerts/',
			successHtml: `
				<span class="o-message__content-highlight">
					Great!
				</span>
				You're all signed up for the myFT daily Email Digest. Get more news delivered direct to your inbox with our email newsletters
			`,
			successActionText: 'Browse newsletters',
			successActionHref: 'https://www.ft.com/newsletters'
		}
	};
}

export function fastFt () {
	return {
		messageId: 'fastFt',
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					See a live feed of market-moving news with informed content, 24 hours a day at
					<span class="o-message__content-highlight-color">
						fastFT
					</span>
				</span>
			`,
			ctaActionText: 'Visit fastFT now',
			ctaActionHref: 'https://www.ft.com/fastft'
		}
	};
}

export function marketsData () {
	return {
		messageId: 'marketsData',
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Get the latest information on equity, currency, fixed income and commodities, and invest smarter with
					<span class="o-message__content-highlight-color">
						Markets Data
					</span>
				</span>
			`,
			ctaActionText: 'Visit Markets Data now',
			ctaActionHref: 'https://markets.ft.com/data'
		}
	};
}
