export function newsletter () {
	const newsletterName = 'Lex - Europe Morning Edition';
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
};

export function myFtFeed () {
	return {
		messageId: 'myFtFeed',
		isDynamicMessage: false,
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
};
