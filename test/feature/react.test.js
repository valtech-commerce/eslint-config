//--------------------------------------------------------
//-- react - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./react.gwt";

describe(`Validate that 'react' works`, () => {
	configTests({ given, when, then });
});
