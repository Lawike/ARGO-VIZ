import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ArgoSceneModule } from './app/argo-scene/ArgoScene.module.ts';

// Init angular
platformBrowserDynamic().bootstrapModule(ArgoSceneModule)
  .catch(err => console.error(err));

// create the main function


