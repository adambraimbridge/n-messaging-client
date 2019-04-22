module.exports = function customSetup (banner, done) {
	const submitBtn = banner.innerElement.querySelector('.n-messaging-banner__button');

	submitBtn.addEventListener('click', handleClick);

	function handleClick (e) {
		e.preventDefault();
		const link = submitBtn.getAttribute('href');
    const dummyEl = document.createElement('input');
    document.body.appendChild(dummyEl);
    dummyEl.setAttribute('value', link);
    dummyEl.select();
    document.execCommand('copy');
    document.body.removeChild(dummyEl);
		return false;
	};

	done();
};
