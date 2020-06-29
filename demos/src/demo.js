const oTracking = require('o-tracking').default;
const { nMessagingClient } = require('../../main-client');

document.documentElement.classList.add('js', 'enhanced');

oTracking.init({
	server: 'https://spoor-api.ft.com/px.gif',
	context: {
		product: 'next'
	},
	user: {
		ft_session: oTracking.utils.getValueFromCookie(/FTSession=([^;]+)/)
	}
});

oTracking.click.init('cta');

nMessagingClient.init();
