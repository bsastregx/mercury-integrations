import { createRouter } from 'stencil-router-v2';

import { setBundleMapping, registerMercury, getImagePathCallbackDefinitions } from '@genexus/mercury';
import { bundleToHashMappings } from './assets/mercury-bundles/bundle-to-hash-mappings';
import { defineCustomElements } from '@genexus/chameleon-controls-library/loader';
import { registryProperty } from '@genexus/chameleon-controls-library/dist/collection';

// Mercury setup
registerMercury();
setBundleMapping(bundleToHashMappings);

// Chameleon setup
registryProperty('getImagePathCallback', getImagePathCallbackDefinitions);
defineCustomElements(window);

export { Components, JSX } from './components';
export const Router = createRouter();
