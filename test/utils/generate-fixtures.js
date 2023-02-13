//--------------------------------------------------------
//-- Calculate configurations
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");
const { ESLint } = require("eslint");
const sortJson = require("sort-json");

const root = path.join(__dirname, "..", "..");
const packageConfig = fsSync.readJson(path.join(root, "package.json"));

Object.entries(packageConfig.exports).forEach(async ([name, file]) => {
	const id = String(name.slice(2)).split("/").join("-");

	const eslint = new ESLint({
		overrideConfig: {
			extends: path.join(root, ...file.split("/")),
		},
		cwd: path.join(root, "src", "config"),
		useEslintrc: false,
	});

	const rawConfig = await eslint.calculateConfigForFile(__filename);
	rawConfig.parser = rawConfig.parser ? rawConfig.parser.slice(root.length) : undefined;

	const config = sortJson(rawConfig, { depth: 100 });

	fsSync.writeJson(path.join(root, "test", "feature", "fixtures", "config", `${id}.json`), config, { space: 2 });
});
