import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CustomDialogComponent } from "./custom-dialog/custom-dialog";

import { ThemeModel } from "@genexus/chameleon-controls-library";
import { bundleToHashMappings } from "../assets/mercury-bundles/bundle-to-hash-mappings";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CustomDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "angular";

  mercuryIconsBundle: ThemeModel = [
    {
      name: "mercury/base/icons",
      url: "/assets/css/" + `${bundleToHashMappings["base/icons"]}.css`,
    },
  ];
}
