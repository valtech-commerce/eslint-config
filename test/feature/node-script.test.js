//--------------------------------------------------------
//-- node/script - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./node-script.gwt";

describe(`Validate that 'node/script' works`, () => {
	configTests({ given, when, then });
});
