import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ChTheme } from "./chameleon-components/index.ts";

// React App (último)
import App from "./App.tsx";

import { bundleToHashMappings } from "./assets/mercury-bundles/bundle-to-hash-mappings.ts";
import { type ThemeModel } from "@genexus/chameleon-controls-library";

const mercuryIconsBundle: ThemeModel = [
  {
    name: "mercury/base/icons",
    url: "/assets/css/" + `${bundleToHashMappings["base/icons"]}.css`,
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChTheme model={mercuryIconsBundle}></ChTheme>
    <App />
  </StrictMode>
);
