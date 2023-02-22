//--------------------------------------------------------
//-- react/typescript - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import { given as givenConfig, when as whenConfig, then as thenConfig } from "../config.gwt";

const given = { ...givenConfig };
const when = { ...whenConfig };
const then = { ...thenConfig };

given.currentRuleset = () => {
	given.ruleset("react-typescript");
};

given.currentExtraConfig = () => {
	given.extraConfig({
		parserOptions: {
			project: [path.join(__dirname, "fixtures", "tsconfig.json")],
		},
	});
};

export { given, when, then };
