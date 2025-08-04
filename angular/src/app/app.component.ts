import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CssLoaderService } from './services/css-loader.service';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { bundleToHashMappings } from '../assets/mercury-css/bundle-to-hash-mappings';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private cssLoader: CssLoaderService) {}

  ngOnInit() {
    this.cssLoader.loadBundles(bundleToHashMappings);
  }
}
