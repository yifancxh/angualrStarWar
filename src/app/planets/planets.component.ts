import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets:any=[];
  constructor(private service: ApiService, private _location:Location) { }

ngOnInit() {
  this.planets=[];
  this.service.listPlanets().subscribe((data:{}) => {
    // (4) Store
    this.planets = data['results'];
  });
  }

  backClicked() {
    this._location.back();
  }

}
