function setContent (banner) {
	const content = banner.messageElement.querySelector('[data-n-messaging-nba-actual-content]');
	const text = content.querySelector('[data-n-messaging-nba-text]');
	const cta = content.querySelector('[data-n-messaging-nba-cta]');
	// TODO work out what content to present to the user instead of the below hard coded content
	text.innerHTML = `
					<span class="o-message__content-highlight">
						Get the edge with fastFT.
					</span>
					See a Live feed of market-moving news with informed comment. 24 hours a day.
			`;
	cta.innerText = 'Visit fastFT';
	// TODO setup click handler to switch to success/error message
	cta.setAttribute('href', '/fastft');
	content.classList.remove('n-messaging-nba__content--hidden');
}

export default function customSetup (banner, done) {
	// TODO ask Insights API or the guru what message to present
	// here we simulate the slight delay due to latency of having to call Insights API or the guru
	setTimeout(() => setContent(banner), 200);
	done();
};
