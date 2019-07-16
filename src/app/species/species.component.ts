import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species:any=[];
  constructor(private service: ApiService, private _location:Location) { }

ngOnInit() {
  this.species=[];
  this.service.listSpecies().subscribe((data:{}) => {
    // (4) Store
    this.species = data['results'];
  });
  }
  backClicked() {
    this._location.back();
  }

}
