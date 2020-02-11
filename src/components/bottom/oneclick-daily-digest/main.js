// import myft from 'next-myft-client';
// import Cookies from 'js-cookie';

import signUpToDigest from './signUp-to-digest';

module.exports = function customSetup (banner, done) {
	if (window.FT && window.FT.flags && window.FT.flags.oneClickDailyDigest) {
		function loadSuccessContent () {
			const outerContainer = banner.bannerElement.querySelector('.o-banner__outer');
			outerContainer.classList.add('o-banner_success-background');
			const closeButton = banner.bannerElement.querySelector('.o-banner__close');
			closeButton.classList.add('o-banner__close-color');
			const signupContent = banner.bannerElement.querySelector('.o-banner_signup-content');
			signupContent.classList.add('o-banner_is-visible');
			const successContent = banner.bannerElement.querySelector('.o-banner_success-content');
			successContent.classList.remove('o-banner_is-visible');
		}

		function handleSignUpClick (evt) {
			evt.preventDefault();

			function logError (err) {
				/* eslint no-console:0 */
				console.log({ info: 'could not add user to the daily digest', err });
			}

			signUpToDigest().then(loadSuccessContent).catch(logError);
			return false;
		}

		const link = banner.innerElement.querySelector('[data-n-messaging-action]');
		link.addEventListener('click', handleSignUpClick);
	}

	done();

};
