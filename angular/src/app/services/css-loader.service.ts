import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CssLoaderService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  loadBundles(bundleToHashMappings: Record<string, string>) {
    if (!isPlatformBrowser(this.platformId)) return;

    const linkBaseBundle = document.createElement('link');
    linkBaseBundle.rel = 'stylesheet';
    linkBaseBundle.href = `/assets/css/${bundleToHashMappings['base/base']}.css`;
    document.head.appendChild(linkBaseBundle);

    const linkIconsBundle = document.createElement('link');
    linkIconsBundle.rel = 'stylesheet';
    linkIconsBundle.href = `/assets/css/${bundleToHashMappings['base/icons']}.css`;
    document.head.appendChild(linkIconsBundle);
  }
}
