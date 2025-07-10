import { Config } from '@stencil/core';
import cpy from 'cpy';

/**
 * Custom plugin to copy the contents of the 'src/assets/mercury-bundles' folder
 * into 'www/assets/css/' **after** the build process completes.
 *
 * This function exists because Stencil's native CopyTasks options do not meet the following requirements:
 *
 * // The following doesn't work, as it copies the full path 'assets/mercury-bundles' inside the destination:
 * // {
 * //   src: './assets/mercury-bundles/',
 * //   dest: 'assets/css',
 * //   keepDirStructure: true,
 * // },
 *
 * // The following doesn't work, as it flattens all the files inside 'mercury-bundles':
 * // {
 * //   src: './assets/mercury-bundles/',
 * //   dest: 'assets/css',
 * //   keepDirStructure: false,
 * // },
 *
 * Therefore, to copy only the contents of 'mercury-bundles' directly into 'www/assets/css',
 * this function is implemented as a custom plugin executed after the build, ensuring
 * that the destination folder exists and only the necessary files are copied.
 */
function copyAssetsAfterBuild(): Required<Config>['plugins'][number] {
  return {
    name: 'copy-folder-content',
    async buildEnd() {
      try {
        await Promise.all([
          cpy('src/assets/mercury-bundles/**', 'www/assets/css', { overwrite: true }),
          cpy('node_modules/@genexus/mercury/dist/assets/fonts/**', 'www/assets/fonts', { overwrite: true }),
          cpy('node_modules/@genexus/mercury/dist/assets/icons/**', 'www/assets/icons', { overwrite: true }),
        ]);

        console.log('Todas las carpetas copiadas correctamente.');
      } catch (error) {
        console.error('Error copiando carpetas:', error);
      }
    },
  };
}

export const config: Config = {
  namespace: 'mercury-stenciljs',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [
    copyAssetsAfterBuild(), // <-- Aquí llamas a la función que retorna el plugin
  ],
};
