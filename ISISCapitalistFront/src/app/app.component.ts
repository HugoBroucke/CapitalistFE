import { Component } from '@angular/core';
import { RestserviceService } from './restservice.service';
import { World, Product, Pallier } from './world';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  world: World = new World();
  server: string;
  qmulti: string;
  title = 'ISISCapitalistFront';
  constructor(private service: RestserviceService) {
    this.server = service.getServer();
    service.getWorld().then(
      world  => {
        console.log(world)
        this.world = world;
      });
    }
}
