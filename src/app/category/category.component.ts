import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any=[];
  
    constructor(private service: ApiService) { }

  ngOnInit() {
    this.categories=[];
    this.service.list().subscribe((data:{}) => {
      // (4) Store
      this.categories = data;
    });
  }


}
