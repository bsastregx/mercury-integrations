"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import type {
  MercuryBundleFull,
  MercuryBundleOptimized,
} from "@genexus/mercury";
import { getBundles } from "@genexus/mercury/bundles.js";
import { bundleToHashMappings } from "../assets/mercury-css/bundle-to-hash-mappings";

export const BASE_CSS_URL = "/_next/static/css/";

export const getCssBundles = (
  bundles: MercuryBundleOptimized[] | MercuryBundleFull[]
) =>
  getBundles(bundles, {
    basePath: BASE_CSS_URL,
    bundleMappings: bundleToHashMappings,
  });

import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    registerMercury();
    registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
  });

  return <Component {...pageProps} />;
}
