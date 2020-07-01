export default function customSetup (banner, done, guruResult) {
	if (guruResult.renderData.remainingArticles <= 0) {
		return;
	}

	done();
}
