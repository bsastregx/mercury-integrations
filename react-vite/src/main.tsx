import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";

import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { setBundleMapping } from "@genexus/mercury/bundles.js";
import { bundleToHashMappings } from "./assets/mercury-css/bundle-to-hash-mappings";

// --- Load CSS bundles dynamically ---
function loadCss(path: string) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = new URL(path, import.meta.url).href;
  document.head.appendChild(link);
}

loadCss(`./assets/mercury-css/${bundleToHashMappings["base/base"]}.css`);
loadCss(`./assets/mercury-css/${bundleToHashMappings["base/icons"]}.css`);

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

import "./setupChameleon";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
