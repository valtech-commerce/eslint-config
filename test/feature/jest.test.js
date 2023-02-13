//--------------------------------------------------------
//-- jest - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./jest.gwt";

describe(`Validate that 'jest' works`, () => {
	configTests({ given, when, then });
});
