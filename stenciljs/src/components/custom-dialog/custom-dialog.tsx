import { Component, Host, h } from '@stencil/core';
import { getBundles } from '@genexus/mercury';

import { getIconPath } from '@genexus/mercury';
const bundles = getBundles(['components/button', 'components/icon'], '/assets/css/');

const ICON = getIconPath({
  category: 'system',
  name: 'add-circle',
  colorType: 'primary',
});
@Component({
  shadow: true,
  styleUrl: 'custom-dialog.css',
  tag: 'custom-dialog',
})
export class CustomDialog {
  render() {
    return (
      <Host>
        <ch-theme model={bundles}></ch-theme>
        <button class="button-primary button-icon-and-text" type="button">
          <ch-image class="icon-md" src={ICON} type="mask" />
          Caption
        </button>
      </Host>
    );
  }
}
