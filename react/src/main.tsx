import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
