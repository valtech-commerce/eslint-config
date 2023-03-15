//--------------------------------------------------------
//-- Read and process shareable config
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");
const deepMerge = require("deepmerge");
const prettierConfig = require("eslint-config-prettier");

module.exports = (...paths) => {
	const shareableConfig = paths.reduce((config, filePath) => {
		const filePaths = filePath.split("/");
		const filename = filePaths.pop();
		const current = fsSync.readYaml(path.join(__dirname, "..", "shareable-config", ...filePaths, `${filename}.yaml`));

		return deepMerge.all([config, current], {
			arrayMerge: (destination, source) => source,
		});
	}, {});

	return deepMerge(shareableConfig, prettierConfig);
};
