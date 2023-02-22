//--------------------------------------------------------
//-- react/typescript - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./react-typescript.gwt";

describe(`Validate that 'react/typescript' works`, () => {
	configTests({ given, when, then });
});
