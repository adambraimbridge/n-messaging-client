export function newsletter ({ newsletterName, newsletterSubscribeUrl, header, body }) {
	return {
		hasSuccessMessage: true,
		renderData: {
			headerHtml: `
				<h1>
					<span class="n-messaging-tbybintrialsubscribe__highlight-regular">
						${header}
					</span>
				</h1>
				`,
			bodyHtml: `
				<p>${body}</p>
			`,
			ctaActionText: `Get the ${newsletterName} newsletter`,
			ctaActionHref: newsletterSubscribeUrl,
			successHtml: `
				<span class="o-message__content-highlight">
					Great!
				</span>
				You’ve signed up for
				<span class="o-message__content-highlight">
					${newsletterName}.
				</span>
				Keep pace with more topics that interest you.
			`,
			successActionText: 'Browse all our newsletters',
			successActionHref: 'https://www.ft.com/newsletters'
		}
	};
}
