import { Config } from '@stencil/core';
import { CopyTask } from '@stencil/core/internal';

const copyTasks = [
  // The following doesn't work, as it also copies '/assets/mercury-bundles/' folders.
  // {
  //   src: './assets/mercury-bundles/',
  //   dest: 'assets/css',
  //   keepDirStructure: true,
  // },
  // The following doesn't work, as it flattens all the files inside 'mercury-bundles'.
  // {
  //   src: './assets/mercury-bundles/',
  //   dest: 'assets/css',
  //   keepDirStructure: true,
  // },
  // Solution to copy mercury-bundles contents into 'www/assets/css' is using a custom script
  // on package.json. At the time of writting is named "mercury-bundles-www".
  {
    src: '../node_modules/@genexus/mercury/dist/assets/fonts/',
    dest: 'assets/fonts/',
  },
  {
    src: '../node_modules/@genexus/mercury/dist/assets/icons/',
    dest: 'assets/icons',
  },
] as const satisfies CopyTask[];

export const config: Config = {
  namespace: 'mercury-stenciljs',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      copy: copyTasks,
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      copy: copyTasks,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [
    {
      name: 'mercury-bundles-copier',
      async buildStart() {
        const { cpSync, mkdirSync } = await import('node:fs');

        try {
          mkdirSync('./www/assets/css', { recursive: true });
          cpSync('./src/assets/mercury-bundles', './www/assets/css', { recursive: true });
          console.log('✓ Mercury bundles copied to www/assets/css');
        } catch (error) {
          console.error('Failed to copy mercury bundles:', error);
        }
      },
    },
  ],
};
