import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArgoSceneComponent } from './ArgoScene.component';

@NgModule({
  declarations: [
    ArgoSceneComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ArgoSceneComponent]
})
export class ArgoSceneModule { }
