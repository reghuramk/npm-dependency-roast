import chalk from "chalk";

import { PackageJson } from "./types";

const roastDependencies = (pkg: PackageJson): void => {
    const deps = pkg.dependencies || {};
    const devDeps = pkg.devDependencies || {};
  
    console.log(chalk.bold(`Roasting dependencies in ${pkg.name || 'your project'}:`));
  
    if ('lodash' in deps && 'underscore' in deps) {
      console.log(chalk.yellow("You’re using both lodash and underscore? That's like using two spoons for cereal."));
    }
  
    if ('moment' in deps) {
      console.log(chalk.magenta("Still using moment? It's 2025. Consider date-fns or dayjs."));
    }
  
    if (Object.keys(devDeps).length > Object.keys(deps).length) {
      console.log(chalk.cyan("Your devDependencies outweigh your dependencies. Building an app or a lab experiment?"));
    }
  
    if ('request' in deps) {
      console.log(chalk.red("request is dead. Use axios or fetch like a modern dev."));
    }
  
    console.log(chalk.green("\nRoast complete. No feelings were harmed... hopefully."));
}

export default roastDependencies