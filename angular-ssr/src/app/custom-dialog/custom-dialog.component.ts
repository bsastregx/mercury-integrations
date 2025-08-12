import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { getBundles } from '@genexus/mercury/bundles.js';
import { getIconPath } from '@genexus/mercury/assets-manager.js';

@Component({
  selector: 'custom-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<ch-theme [model]="bundles"></ch-theme>
    <button class="button-primary button-icon-and-text" type="button">
      <ch-image class="icon-md" [src]="ICON" [type]="'mask'" />
      Caption
    </button>`,
})
export class CustomDialogComponent {
  bundles = getBundles(
    ['components/button', 'components/icon'],
    '/assets/css/',
  );
  ICON = getIconPath({
    category: 'system',
    name: 'add-circle',
    colorType: 'primary',
  });
}
