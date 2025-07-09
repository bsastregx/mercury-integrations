"use client";

import { useEffect } from "react";
import "./globals.css";

import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";

import "@/assets/mercury-bundles/base/base.css";
import "@/assets/mercury-bundles/base/icons.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    registerMercury();
    registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
  });

  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
