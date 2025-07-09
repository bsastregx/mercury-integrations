import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Mercury (mapeo primero)
import { setBundleMapping } from "@genexus/mercury";
import { bundleToHashMappings } from "./assets/mercury-css/bundle-to-hash-mappings";
setBundleMapping(bundleToHashMappings);

// Luego el resto de Mercury
import { registerMercury } from "@genexus/mercury";
import { getImagePathCallbackDefinitions } from "@genexus/mercury";

// Chameleon
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";
import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";

// React App (último)
import App from "./App.tsx";

// Configuración
registerMercury();
registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
defineCustomElements(window);

import "./assets/mercury-css/base/base-bfed1d7bde12a786.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
