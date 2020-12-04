"use strict";

/**
 * When using the PNPM package manager, you can use pnpmfile.js to workaround
 * dependencies that have mistakes in their package.json file.  (This feature is
 * functionally similar to Yarn's "resolutions".)
 *
 * For details, see the PNPM documentation:
 * https://pnpm.js.org/docs/en/hooks.html
 *
 * IMPORTANT: SINCE THIS FILE CONTAINS EXECUTABLE CODE, MODIFYING IT IS LIKELY TO INVALIDATE
 * ANY CACHED DEPENDENCY ANALYSIS.  After any modification to pnpmfile.js, it's recommended to run
 * "rush update --full" so that PNPM will recalculate all version selections.
 */
module.exports = {
  hooks: {
    readPackage(pkg) {
      switch (pkg.name) {
        // case 'sequelize':
        //   pkg.dependencies['mysql2'] = '^1.6.5'
        //   break
        // case 'react-s3-uploader':
        //   pkg.dependencies['express'] = '^4.16.4'
        //   break
        case 'graphql-tag':
          pkg.dependencies['graphql'] = '~14.6.0';
          break;
        case 'react-audio-player':
          pkg.dependencies['react-hot-loader'] = '^4.8.4';
          break;
        case 'react-scripts':
          pkg.dependencies['webpack'] = '4.42.0';
          break
      }
      return pkg;
    }
  }
};

/**
 * This hook is invoked during installation before a package's dependencies
 * are selected.
 * The `packageJson` parameter is the deserialized package.json
 * contents for the package that is about to be installed.
 * The `context` parameter provides a log() function.
 * The return value is the updated object.
 */
function readPackage(packageJson, context) {
  // // The karma types have a missing dependency on typings from the log4js package.
  // if (packageJson.name === '@types/karma') {
  //  context.log('Fixed up dependencies for @types/karma');
  //  packageJson.dependencies['log4js'] = '0.6.38';
  // }

  return packageJson;
}