import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Userrole } from '../models/userrole';
import { UserroleService } from '../services/userrole.service';
import Swal from 'sweetalert2';
export interface Brand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent  implements AfterViewInit{
  filterForm!:FormGroup;
  displayedColumns = ['rolename', 'Action'];
  
  dataSource!: any;
  optionList?: Userrole[];
 
  
  // dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder,
    private optionService: UserroleService,
   ) {
    this.addFilter();
  }

  optionListAll() {
   
    this.optionService.starList({}).subscribe(res => {
      if (res) {
        console.log("res",res);
        this.renderData(res);
      }
    });
  }
  renderData(data:any){
    this.optionList = data;
    console.log(data, this.optionList, 'data all');
    console.log(data.data, 'data.')
    this.dataSource = new MatTableDataSource<Userrole>(
      
  data.data.rows
 

    );
    this.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit() {
    this.optionListAll();
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
    this.router.navigate(["/add-user-role"])
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
  }
  deleteRecord(id:any){
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
        optionService.starDelete({options_by_rating_id: id })
          .subscribe(
            res => {
              console.log(res, 'deleteResp');
              Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
              this.optionListAll();
            },
            error => {
             
            }
          );
      }
    });
  }
  

}



