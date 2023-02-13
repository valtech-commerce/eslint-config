//--------------------------------------------------------
//-- react - Given-When-Then
//--------------------------------------------------------
import * as gwt from "../config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("react");
};

export { given, when, then };
