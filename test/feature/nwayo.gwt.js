//--------------------------------------------------------
//-- nwayo - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("nwayo");
};

export { given, when, then };
