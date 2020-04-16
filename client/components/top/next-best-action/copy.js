/**
 * This contains the copy for each of the different NBA (Next Best
 * Action) messages with some dynamic content. The reason these are
 * in here and not the guru is we want to keep NBA-related HTML/CSS/JS
 * all in one place instead of 2 or 3 places.
 */

export function newsletter ({ newsletterName, newsletterSubscribeUrl }) {
	return {
		hasSuccessMessage: true,
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
			ctaActionHref: newsletterSubscribeUrl,
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
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					<span class="o-message__content-highlight-color">
						myFT
					</span>
					is a dedicated place to add topics to create your
					<span class="o-message__content-highlight-color">
						personalised feed
					</span>
					of stories
				</span>
			`,
			ctaActionText: 'Explore your myFT feed now',
			ctaActionHref: 'https://www.ft.com/myft'
		}
	};
}

export function gift () {
	return {
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
		hasSuccessMessage: true,
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
			ctaActionHref: 'https://www.ft.com/tour/apps',
			successHtml: `
				<span class="o-message__content-highlight">
					Great!
				</span>
				We've emailed you a download link. Look out for an email from us, shortly.
			`
		}
	};
}

export function dailyDigest () {
	return {
		hasSuccessMessage: true,
		renderData: {
			ctaHtml: `
				<span class="o-message__content-highlight">
					Get a summary of the latest news you follow straight to your inbox, with the
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
