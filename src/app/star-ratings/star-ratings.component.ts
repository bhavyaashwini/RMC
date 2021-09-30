import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { StarratingService } from '../services/starrating.service';
import {Starrating } from '../models/starrating';
export interface Brand {
  value: string;
    name:string;
}


@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.css']
})
export class StarRatingsComponent  implements AfterViewInit{
  filterForm!:FormGroup;
  dataSource!: any;
  starList?: Starrating[];
  displayedColumns = ['name', 'value', 'Action'];
  
  // dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  statusname: Brand[] = [
    { value: 'online', name: 'online' },
    { value: 'offline', name: 'offline' },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder,
    private starService: StarratingService) {
    this.addFilter();
  }
  MessageListAll() {
   
    this.starService.starList({}).subscribe(res => {
      if (res) {
        console.log("res",res);
        this.renderData(res);
      }
    });
  }
  renderData(data:any){
    this.starList = data;
    console.log(data, this.starList, 'data all');
    console.log(data.data, 'data.')
    this.dataSource = new MatTableDataSource<Starrating>(
      
  data.data.rows
 

    );
    this.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit() {
    this.MessageListAll();
  }
 
  addFilter(){
    this.filterForm = this._formBuilder.group({
      start_date:["", Validators.required],
      end_date:["", Validators.required]
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource = this.dataSource;
  }

  add(){
    this.router.navigate(["/add-star-ratings"])
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
  }
 
  deleteRecord(id:any){
    if(window.confirm('Are you sure you want to delete')) {
      this.starService.starDelete({ id: id }).subscribe(result => {
       console.log(result, 'deleteres')
        this.MessageListAll();
      })
    }
    
  }
  

}
export interface UsersData {
 
  name:any;
  value:any
}

const ELEMENT_DATA: UsersData[] = [
  {name: 'hello', value: 23456},
 
  
  
];

