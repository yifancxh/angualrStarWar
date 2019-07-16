import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:any=[];
   //_location=Location;
    constructor(private service: ApiService,private _location: Location) { }
   
  ngOnInit() {
    this.people=[];
    this.service.listPeople().subscribe((data:{}) => {
      this.people = data['results'];
    });
  }

    
  backClicked() {
    this._location.back();
  }

  selectedPeople: any;
onSelect(people: any): void {
  this.selectedPeople = people;
}
  
}
