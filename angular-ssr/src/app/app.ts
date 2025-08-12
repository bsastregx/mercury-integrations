import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CssLoaderService } from './services/css-loader.service';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { bundleToHashMappings } from '../assets/mercury-css/bundle-to-hash-mappings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private cssLoader: CssLoaderService) {}
  protected readonly title = signal('angular-mercury');

  ngOnInit() {
    this.cssLoader.loadBundles(bundleToHashMappings);
  }
}
