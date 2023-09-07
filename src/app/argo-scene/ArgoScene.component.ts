import { Component, NgZone, OnInit } from '@angular/core';
import { World } from '../../World/World';

@Component({
  selector: 'argo-scene',
  templateUrl: './ArgoScene.component.html',
  styleUrls: ['./ArgoScene.component.css']
})
export class ArgoSceneComponent implements OnInit {
  title = 'argo-scene';

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    main().catch((err) => {
      console.log(err);
    });
  }
}

async function main() {
  // Get a reference to the container element
  const container =  document.querySelector('#scene-container');

  const renderOnDemand = false;
  // 1. Create an instance of the World app
  const world = new World(container, renderOnDemand, true);
  // complete async tasks
  await world.init();
  // 2. Render the scene
  if (renderOnDemand) world.render();
  else world.start();
}