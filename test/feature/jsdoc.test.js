//--------------------------------------------------------
//-- jsdoc - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./jsdoc.gwt";

describe(`Validate that 'jsdoc' works`, () => {
	configTests({ given, when, then });
});
