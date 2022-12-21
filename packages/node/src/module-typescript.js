//--------------------------------------------------------
//-- ESLint config - Module TypeScript
//--------------------------------------------------------
import loader from "@absolunet/eslint-loader";
import deepMerge from "deepmerge";

const commonConfig = loader(__dirname, "shareable-config-common.yaml");
const moduleConfig = loader(__dirname, "shareable-config-module.yaml");
const typescriptConfig = loader(__dirname, "shareable-config-module-typescript.yaml");

module.exports = deepMerge.all([commonConfig, moduleConfig, typescriptConfig], {
	arrayMerge: (destination, source) => source,
});
