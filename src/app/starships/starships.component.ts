import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships:any=[];
  constructor(private service: ApiService, private _location:Location) { }

ngOnInit() {
  this.starships=[];
  this.service.listStarships().subscribe((data:{}) => {
    // (4) Store
    this.starships = data['results'];
  });
}
backClicked() {
  this._location.back();
}
}
