//--------------------------------------------------------
//-- node/module/typescript - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./node-module-typescript.gwt";

describe(`Validate that 'node/module/typescript' works`, () => {
	configTests({ given, when, then });
});
