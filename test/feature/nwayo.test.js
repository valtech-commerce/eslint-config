//--------------------------------------------------------
//-- nwayo - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./nwayo.gwt";

describe(`Validate that 'nwayo' works`, () => {
	configTests({ given, when, then });
});
