//--------------------------------------------------------
//-- Standards - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import fss from "@valtech-commerce/fss";
import * as gwt from "../utils/base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

let root;
let packageConfig;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noPackage = () => {
	packageConfig = undefined;
};

//-- Given - Root
given.root = () => {
	root = path.join(__dirname, "..", "..");
};

//-- When - Package
when.packageIsParsed = () => {
	packageConfig = fss.readJson(`${root}/package.json`);
};

//-- Then - Config
then.packageNameShouldBeValid = () => {
	expect(packageConfig.name).toMatch(/^@valtech-commerce\/.+$/u);
};

then.packageKeywordsShouldBeValid = () => {
	expect(packageConfig.keywords).toIncludeAllMembers(["eslint", "eslintconfig", "eslint-config"]);
};

export { given, when, then };
