import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

// Mercury / Chameleon
import { setBundleMapping } from '@genexus/mercury';
import { bundleToHashMappings } from './assets/mercury-css/bundle-to-hash-mappings';
setBundleMapping(bundleToHashMappings);

import { registryProperty } from '@genexus/chameleon-controls-library/dist/collection';
import { getImagePathCallbackDefinitions } from '@genexus/mercury';
import { registerMercury } from '@genexus/mercury';

// Register the default value for the getImagePathCallback property in all Chameleon
// components. This implementation allows us to remove the need for binding the
// getImagePathCallback property in all Chameleon controls that must render icons.
registryProperty('getImagePathCallback', getImagePathCallbackDefinitions);

// It registers a mapping between the icons metadata and its path.
registerMercury();
