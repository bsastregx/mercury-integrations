"use client";
import { getIconPath } from "@genexus/mercury/assets-manager.js";
import { getBundles } from "@genexus/mercury/bundles.js";
import { ChTheme, ChImage } from "../../chameleon-components";

const CSS_BUNDLES = getBundles(
  ["components/button", "components/icon"],
  "/assets/css/"
);

const ICON = getIconPath({
  category: "system",
  name: "add-circle",
  colorType: "primary",
});

export const CustomDialog = () => (
  <>
    <ChTheme model={CSS_BUNDLES}></ChTheme>
    <button className="button-primary button-icon-and-text" type="button">
      <ChImage className="icon-md" src={ICON} type="mask" />
      Caption
    </button>
  </>
);
