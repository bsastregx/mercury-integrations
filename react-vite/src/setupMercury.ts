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

// Cargar estilos después de la configuración
function loadCssBundles(bundleToHashMappings: Record<string, string>) {
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

loadCssBundles(bundleToHashMappings);
