import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { defineCustomElements } from '@genexus/chameleon-controls-library/loader';
import { registryProperty } from '@genexus/chameleon-controls-library/dist/collection';

import { getImagePathCallbackDefinitions } from '@genexus/mercury/assets-manager.js';
import { registerMercury } from '@genexus/mercury/register-mercury.js';
import { setBundleMapping } from '@genexus/mercury/bundles.js';

import { bundleToHashMappings } from '../src/assets/mercury-css/bundle-to-hash-mappings';

// Establishes the mapping between bundle names and their generated hashes.
// For example, it maps the `components/button` bundle name to `button-e261832acea09e81.css`
setBundleMapping(bundleToHashMappings);

// It registers a mapping between the icons metadata and its path.
registerMercury();

// Register the default value for the getImagePathCallback property in all Chameleon
// components. This implementation allows us to remove the need for binding the
// getImagePathCallback property in all Chameleon controls that must render icons.
registryProperty('getImagePathCallback', getImagePathCallbackDefinitions);

// Setup the auto-loader for Chameleon components
defineCustomElements(window);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
