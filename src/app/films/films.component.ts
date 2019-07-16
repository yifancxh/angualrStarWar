import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:any=[];
    constructor(private service: ApiService, private _location:Location) { }

  ngOnInit() {
    this.films=[];
    this.service.listFilms().subscribe((data:{}) => {
      // (4) Store
      this.films = data['results'];
    });
}
backClicked() {
  this._location.back();
}

}
