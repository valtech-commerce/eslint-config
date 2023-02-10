//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import deepmerge from "deepmerge";
import { given as baseGiven, when as baseWhen, then as baseThen } from "./base.gwt.js";

const given = { ...baseGiven };
const when = { ...baseWhen };
const then = { ...baseThen };

const { ESLint } = require("eslint");

let ruleset;
let configPath;
let config;
let extraConfig;
let eslint;

//-- Given - Reset
given.noRuleset = () => {
	ruleset = undefined;
};

given.noConfig = () => {
	config = undefined;
};

given.noExtraConfig = () => {
	extraConfig = undefined;
};

given.noESLint = () => {
	eslint = undefined;
};

//-- Given - Ruleset
given.ruleset = (value) => {
	ruleset = value;
};

//-- Given - Extra config
given.extraConfig = (value) => {
	extraConfig = value;
};

given.currentExtraConfig = () => {
	// No extra config by default
	extraConfig = {};
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		configPath = path.join(__dirname, "..", "..", "src", "config", ruleset);
		config = require(configPath);
	});
};

when.extraConfigIsMerged = () => {
	config = deepmerge(config, extraConfig);
};

when.configIsParsed = () => {
	when.configIsLoaded();
	when.extraConfigIsMerged();

	when.attempting(() => {
		eslint = new ESLint({
			baseConfig: config,
			cwd: path.dirname(configPath),
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
