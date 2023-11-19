'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const start = performance.now();

process.stdout.write('\x1b[33m$ Post build script running...\x1b[0m\n');
process.stdout.write(
	'\x1b[33m$ Removing unnecessary files and directories...\x1b[0m\n',
);

const WORKING_DIRECTORY = path.join(__dirname, '../dist');

const files_to_remove_on_root = [
	'inter.es.js',
	'inter.cjs.js',
	'colors.es.js',
	'colors.cjs.js',
	'animation.es.js',
	'animation.cjs.js',
	'assistant.es.js',
	'assistant.cjs.js',
	'vite.config.d.ts',
	'vitest.config.d.ts',
];

const sub_dirs_to_remove = ['__stories__', '__tests__'];

process.stdout.write(
	'\x1b[35m$ WORKING DIRECTORY: ' + WORKING_DIRECTORY + '\x1b[0m\n',
);

const utils_path = path.join(WORKING_DIRECTORY, 'utils');

// Remove directories on roo
if (fs.existsSync(utils_path)) {
	process.stdout.write(
		'\x1b[31m$ Deleting directory:\x1b[0m \x1b[41m' + utils_path + '\x1b[0m\n',
	);
	execSync(`rm -rf ${utils_path}`);
}

// Remove files on root
files_to_remove_on_root.forEach((artifact) => {
	const artifact_path = path.join(WORKING_DIRECTORY, artifact);
	const should_delete = files_to_remove_on_root.includes(artifact);

	if (should_delete) {
		execSync('rm -rf ' + artifact_path);
		process.stdout.write(
			'\x1b[31m$ Deleting file:\x1b[0m \x1b[41m' + artifact_path + '\x1b[0m\n',
		);
	} else {
		process.stdout.write(
			'\x1b[34m$ Skipping file:\x1b[0m \x1b[44m' + artifact_path + '\x1b[0m\n',
		);
	}
});

const COMPONENT_DIRECTORY = path.join(WORKING_DIRECTORY, 'src', 'components');
const COMPONENT_CONTENT = fs.readdirSync(COMPONENT_DIRECTORY);

COMPONENT_CONTENT.forEach((dir) => {
	const artifact = path.join(COMPONENT_DIRECTORY, dir);
	if (fs.statSync(artifact).isDirectory()) {
		const sub_dir_path = fs.readdirSync(artifact);
		sub_dir_path.forEach((sub_dir) => {
			const sub_dir_item_path = path.join(artifact, sub_dir);
			if (
				fs.statSync(sub_dir_item_path).isDirectory() &&
				sub_dirs_to_remove.includes(sub_dir)
			) {
				execSync('rm -rf ' + sub_dir_item_path);
				process.stdout.write(
					'\x1b[31m$ Deleting directory:\x1b[0m \x1b[41m' +
						sub_dir_item_path +
						'\x1b[0m\n',
				);
			}
		});
	}
});

const end = performance.now();
const time = end - start;
const rounded = time.toFixed(3);

process.stdout.write(
	'\x1b[32m$ Post build script completed in ' + rounded + 'ms\x1b[0m\n',
);
