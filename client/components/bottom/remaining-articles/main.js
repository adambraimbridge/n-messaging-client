export default function customSetup (banner, done, guruResult, trackEventAction) {
	// console.log(guruResult);

	// const {cohort, remainingArticles} = guruResult.renderData;

	trackEventAction('test', 'some value', {
		some: 'added context',
	});


	done();
}
