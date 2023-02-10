//--------------------------------------------------------
//-- node/module - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./node-module.gwt";

describe(`Validate that 'node/module' works`, () => {
	configTests({ given, when, then });
});
