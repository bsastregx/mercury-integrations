"use client";

// Mercury
import { setBundleMapping } from "@genexus/mercury/bundles.js";
import { bundleToHashMappings } from "@/assets/mercury-bundles/bundle-to-hash-mappings";
setBundleMapping(bundleToHashMappings);

import { CustomDialog } from "@/components/CustomDialog";

export default function Home() {
  return (
    <div>
      <CustomDialog></CustomDialog>
    </div>
  );
}
