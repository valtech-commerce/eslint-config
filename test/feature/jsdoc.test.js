//--------------------------------------------------------
//-- jsdoc - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./jsdoc.gwt";

describe(`Validate that 'jsdoc' works`, () => {
	configTests({ given, when, then });
});
