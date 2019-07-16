import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles:any=[];
  constructor(private service: ApiService, private _location:Location) { }

ngOnInit() {
  this.vehicles=[];
  this.service.listVehicles().subscribe((data:{}) => {
    // (4) Store
    this.vehicles = data['results'];
  });
  }
  backClicked() {
    this._location.back();
  }
}
