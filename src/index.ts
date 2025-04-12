import chalk from 'chalk';

import { readPackageJson } from './utils';
import roastDependencies from './roaster';
const packagePath = process.argv[2] || './package.json';

try {
  const pkg = readPackageJson(packagePath);
} catch (err) {
  console.error(chalk.red(`\n❌ Error: ${err}`));
  process.exit(1);
}
