//--------------------------------------------------------
//-- Config tests
//--------------------------------------------------------

export default ({ given, when, then }) => {
	beforeEach(() => {
		given.noException();
		given.noRuleset();
		given.noConfig();
		given.noExtraConfig();
		given.noESLint();
		given.currentRuleset();
		given.currentExtraConfig();
	});

	test(`Ensure YAML is parsable`, () => {
		when.configIsLoaded();
		then.shouldNotHaveThrown();
	});

	test(`Ensure file contains config`, () => {
		when.configIsLoaded();
		then.configShouldNotBeEmpty();
	});

	test(`Ensure config is parsable by ESLint`, () => {
		when.configIsParsed();
		then.shouldNotHaveThrown();
	});

	test(`Ensure config can be used`, async () => {
		await when.configIsUsed();
		then.shouldNotHaveThrown();
	});
};
