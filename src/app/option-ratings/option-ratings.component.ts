
import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
export interface Brand {
  value: string;
    star_id:any;
}


@Component({
  selector: 'app-option-ratings',
  templateUrl: './option-ratings.component.html',
  styleUrls: ['./option-ratings.component.css']
})
export class OptionRatingsComponent  implements AfterViewInit{
  filterForm!:FormGroup;
  displayedColumns = ['id', 'name', 'starid', 'Action'];
  
  dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  statusname: Brand[] = [
    { value: 'online', star_id: '1' },
   
   
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
    this.router.navigate(["/add-star-option"])
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
 id:any;
 name:any;
 star_id:any;
}

const ELEMENT_DATA: UsersData[] = [
  {id:1,name:'hello',star_id: '123'}
 
  
  
];


