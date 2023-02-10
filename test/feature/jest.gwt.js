//--------------------------------------------------------
//-- jest - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../utils/config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("jest");
};

export { given, when, then };
