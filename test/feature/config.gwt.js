//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "path";
import * as gwt from "../base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

const { ESLint } = require(require.resolve("eslint", {
	paths: [path.join(__dirname, "..", "..", "packages", "core")],
}));

let root;
let config;
let eslint;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noConfig = () => {
	config = undefined;
};

given.noESLint = () => {
	eslint = undefined;
};

//-- Given - Root
given.root = (value) => {
	root = value;
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		config = require(root); // eslint-disable-line node/global-require
	});
};

when.configIsParsed = () => {
	when.configIsLoaded();

	when.attempting(() => {
		eslint = new ESLint({
			baseConfig: config,
			cwd: root,
			useEslintrc: false,
		});
	});
};

when.configIsUsed = async () => {
	when.configIsParsed();

	await when.attemptingAsync(async () => {
		await eslint.lintText("");
	});
};

//-- Then - Config
then.configShouldNotBeEmpty = () => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
};

export { given, when, then };
