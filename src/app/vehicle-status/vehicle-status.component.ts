import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
export interface Brand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.css']
})


export class VehicleStatusComponent  implements AfterViewInit{
  filterForm!:FormGroup;
  displayedColumns = ['statuscode', 'colorcode', 'Action'];
  
  dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  statusname: Brand[] = [
    { value: 'online', viewValue: 'online' },
    { value: 'offline', viewValue: 'offline' },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder) {
    this.addFilter();
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
    this.router.navigate(["/add-vehicle"])
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
  }
  deleteTicket() {
   
  }
  

}
export interface UsersData {
  name: any;
  status_name: string;
}

const ELEMENT_DATA: UsersData[] = [
  {status_name: 'online', name: 23456},
  {status_name: 'online', name: '123345'},
  {status_name: 'online', name: '123345'},
  {status_name: 'online', name: '123345'},
  {status_name: 'offline', name: '123345'},
  {status_name: 'offline', name: '123345'},
  {status_name: 'offline', name: '123345'},
  {status_name: 'offline', name: '123345'},
  {status_name: 'offline', name: '123345'},
  {status_name: 'offline', name: '123345'},
  {status_name: 'offline', name: '123345'},
  
  
];