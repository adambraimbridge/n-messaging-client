export default function customSetup (banner, done, guruResult) {
	const remainingArticles = guruResult.renderData.remainingArticles;

	if(remainingArticles === 0) {
		return;
	}

	done();
}
