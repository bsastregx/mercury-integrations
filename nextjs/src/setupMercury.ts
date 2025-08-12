// setupMercury.ts
import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";

import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { setBundleMapping } from "@genexus/mercury/bundles.js";

import { bundleToHashMappings } from "./assets/mercury-css/bundle-to-hash-mappings";

export function setupMercury() {
  // Establishes the mapping between bundle names and their generated hashes.
  // For example, it maps the `components/button` bundle name to `button-e261832acea09e81.css`
  setBundleMapping(bundleToHashMappings);

  // It registers a mapping between the icons metadata and its path.
  registerMercury();

  // Register the default value for the getImagePathCallback property in all Chameleon
  // components. This implementation allows us to remove the need for binding the
  // getImagePathCallback property in all Chameleon controls that must render icons.
  registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);

  // Setup the auto-loader for Chameleon components
  defineCustomElements(window);

  // Insert CSS bundles dynamically
  const head = document.head;

  const linkBase = document.createElement("link");
  linkBase.rel = "stylesheet";
  linkBase.href = `/assets/css/${bundleToHashMappings["base/base"]}.css`;
  head.appendChild(linkBase);

  const linkIcons = document.createElement("link");
  linkIcons.rel = "stylesheet";
  linkIcons.href = `/assets/css/${bundleToHashMappings["base/icons"]}.css`;
  head.appendChild(linkIcons);
}
