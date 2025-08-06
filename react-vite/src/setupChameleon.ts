import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";
import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { setBundleMapping } from "@genexus/mercury/bundles.js";
import { bundleToHashMappings } from "./assets/mercury-css/bundle-to-hash-mappings";

setBundleMapping(bundleToHashMappings);
registerMercury();
registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
defineCustomElements(window);
