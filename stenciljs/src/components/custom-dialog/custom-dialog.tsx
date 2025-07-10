import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-dialog',
  styleUrl: 'custom-dialog.css',
  shadow: true,
})
export class CustomDialog {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
