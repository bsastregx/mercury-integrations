import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { App } from "./app/app";

// Mercury
import { setBundleMapping } from "@genexus/mercury";
import { bundleToHashMappings } from "./assets/mercury-css/bundle-to-hash-mappings";
import { getImagePathCallbackDefinitions } from "@genexus/mercury";
import { registerMercury } from "@genexus/mercury";

// Chameleon
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";
import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";

registerMercury();
setBundleMapping(bundleToHashMappings);
// Register the default value for the getImagePathCallback property in all Chameleon
// components. This implementation allows us to remove the need for binding the
// getImagePathCallback property in all Chameleon controls that must render icons.
registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
defineCustomElements(window);

// It registers a mapping between the icons metadata and its path.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
