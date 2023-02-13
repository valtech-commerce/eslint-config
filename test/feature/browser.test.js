//--------------------------------------------------------
//-- browser - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./browser.gwt";

describe(`Validate that 'browser' works`, () => {
	configTests({ given, when, then });
});
