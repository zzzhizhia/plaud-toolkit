#!/usr/bin/env node
require('tsx/cjs');
const { run } = require('../src/index.ts');
run(process.argv.slice(2));
