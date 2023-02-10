//--------------------------------------------------------
//-- jest - Feature tests
//--------------------------------------------------------
import configTests from "../utils/config";
import { given, when, then } from "./jest.gwt";

describe(`Validate that 'jest' works`, () => {
	configTests({ given, when, then });
});
