import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  peopleDetail:any=[];
    constructor(private service: ApiService, private _location:Location) { }

  ngOnInit() {
    this.peopleDetail=[];
    this.service.readPeople(1).subscribe((data:{}) => {
      this.peopleDetail = data;
    });
  }
  backClicked() {
    this._location.back();
  }
}
