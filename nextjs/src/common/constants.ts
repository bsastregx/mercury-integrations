import type {
  MercuryBundleFull,
  MercuryBundleOptimized,
} from "@genexus/mercury";
import { getBundles } from "@genexus/mercury/bundles.js";
import { bundleToHashMappings } from "@/assets/mercury-bundles/bundle-to-hash-mappings";

export const BASE_CSS_URL = "/_next/static/css/";

export const getCssBundles = (
  bundles: MercuryBundleOptimized[] | MercuryBundleFull[]
) =>
  getBundles(bundles, {
    basePath: BASE_CSS_URL,
    bundleMappings: bundleToHashMappings,
  });
