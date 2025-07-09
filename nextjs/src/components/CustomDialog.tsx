"use client";

import type { ThemeModel } from "@genexus/chameleon-controls-library";

import { getIconPath } from "@genexus/mercury/assets-manager.js";
import { getCssBundles } from "@/common/constants";
import { ChTheme, ChImage } from "@/chameleon-components";

const CSS_THEMES: ThemeModel = getCssBundles([
  "components/button",
  "components/icon",
]);

console.log("CSS_THEMES", CSS_THEMES);

const ICON = getIconPath({
  category: "system",
  name: "add-circle",
  colorType: "primary",
});

export const CustomDialog = () => (
  <>
    <ChTheme model={CSS_THEMES}></ChTheme>
    <button className="button-primary button-icon-and-text" type="button">
      <ChImage className="icon-md" src={ICON} type="mask" />
      Caption
    </button>
  </>
);
