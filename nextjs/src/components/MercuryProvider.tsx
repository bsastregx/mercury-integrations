"use client";

import { useEffect, useState } from "react";
import { setupMercury } from "../setupMercury";

export default function MercuryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMercuryReady, setMercuryReady] = useState(false);

  useEffect(() => {
    setupMercury();
    setMercuryReady(true);
  }, []);

  if (!isMercuryReady) {
    return <div>Loading Mercury...</div>;
  }

  return <>{children}</>;
}
