//--------------------------------------------------------
//-- pwastudio - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../utils/config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("pwastudio");
};

export { given, when, then };
