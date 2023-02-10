//--------------------------------------------------------
//-- typescript - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./typescript.gwt";

describe(`Validate that 'typescript' works`, () => {
	configTests({ given, when, then });
});
