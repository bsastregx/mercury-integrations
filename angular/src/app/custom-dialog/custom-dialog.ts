import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { getBundles } from '@genexus/mercury/bundles.js';

@Component({
  selector: 'custom-dialog',
  standalone: true,
  styleUrl: './custom-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<ch-theme model="bundles"></ch-theme>
    <button class="button-primary" type="button">Caption</button>`,
})
export class CustomDialogComponent {
  bundles = getBundles(['components/button'], '/assets/css/');
}
