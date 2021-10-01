
import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { BookingstatusService } from '../services/bookingstatus.service';
import { Bookingstatus } from '../models/bookingstatus';
import Swal from 'sweetalert2';
export interface Brand {
  value: string;
    name:string;
}

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css']
})
export class BookingStatusComponent  implements AfterViewInit{
  filterForm!:FormGroup;
  dataSource!: any;
  cancelList?: Bookingstatus[];
  displayedColumns = ['rolename', 'name', 'Action'];
  
  // dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  statusname: Brand[] = [
    { value: 'online', name: 'online' },
    { value: 'offline', name: 'offline' },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder,
    private bookingService: BookingstatusService,
    ) {
    this.addFilter();
  }
  bookingListAll() {
    this.bookingService.cancelList({}).subscribe(res => {
       if (res) {
         console.log("res",res);
         this.renderData(res);
       }
     });
   }
   renderData(data:any){
     this.cancelList = data;
     console.log(data, this.cancelList, 'data all');
     console.log(data.data, 'data.')
     this.dataSource = new MatTableDataSource<Bookingstatus>(
       
   data.data.rows
  
 
     );
     this.dataSource = this.dataSource;
     this.dataSource.paginator = this.paginator;
   }
   
   ngOnInit() {
     this.bookingListAll();
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
    this.router.navigate(["/add-booking-status"])
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
  }
  deleteTicket(id:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        this.
        bookingService.cancelDelete({cancel_booking_id: id })
          .subscribe(
            res => {
              console.log(res, 'deleteResp');
              Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
              this.bookingListAll();
            },
            error => {
             
            }
          );
      }
    });
  }
  

}
export interface UsersData {
  role_name: any;
  name:any;
}

const ELEMENT_DATA: UsersData[] = [
  {role_name: 'hello', name: 23456},
 
  
  
];
