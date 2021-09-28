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
  selector: 'app-vehicle-category',
  templateUrl: './vehicle-category.component.html',
  styleUrls: ['./vehicle-category.component.css']
})
export class VehicleCategoryComponent  implements AfterViewInit {
  filterForm!:FormGroup;
  displayedColumns = ['statuscode', 'colorcode','chargepermin','futuredate','gapmint', 'icon','intervalmint', 
  'limitkm','mincharge','blockmins','batchinglimitkm','acceptedseconds','bookinggap','Action'];
  dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  statusname: Brand[] = [
    { value: 'online', viewValue: 'online' },
    { value: 'offline', viewValue: 'offline' },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder) {
    this.addFilter();
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
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
    this.router.navigate(["/add-vehicle-category"])
  }
  deleteTicket() {
   
  }
  

}
export interface UsersData {
  name: string;
  charge_per_km : any;
  charge_per_min: string;
  future_date:any;
  gap_mins: any;
  icon_url:string;
  interval_mins: any;
  limit_km: any;
  min_charge:any;
  block_mins:any;
  batching_limit_km:any;
  accepted_seconds:any;
  booking_gap:any;
}

const ELEMENT_DATA: UsersData[] = [
  {name: 'online',charge_per_km : 231, charge_per_min:'23', future_date:28, gap_mins:2,icon_url:'hello', 
  interval_mins: '23',limit_km:3,  min_charge:'23', block_mins:21, batching_limit_km:21,  accepted_seconds:'24'
,booking_gap:24},
  
 
  
  
];