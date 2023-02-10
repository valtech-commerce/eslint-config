//--------------------------------------------------------
//-- spire - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./spire.gwt";

describe(`Validate that 'spire' works`, () => {
	configTests({ given, when, then });
});
