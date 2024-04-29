import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// whole app is outside of ngZone (angular not detect any changes as app is out of angular's change detection)
// platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
//   .catch(err => console.error(err));
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
