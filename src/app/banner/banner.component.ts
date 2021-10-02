import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { Banner } from '../models/banner';
import { BannerService } from '../services/banner.service';
export interface Brand {
  value: string;
  template_id:any;
}



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  implements OnInit{
  filterForm!:FormGroup;
  dataSource!: any;
  messageList?: Banner[];
  displayedColumns = [ 'name',  'Action'];
  
 
  selection = new SelectionModel<Banner>(true, []);
  filteredBanks: any;
  statusname: Brand[] = [
    { value: 'online', template_id: '1' },
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder,
     private messageTemplate: BannerService) {
    this.addFilter();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
   
   MessageListAll() {
   
    this.messageTemplate.MessageList({}).subscribe(res => {
      if (res) {
        console.log("res",res);
        this.renderData(res);
      }
    });
  }
  renderData(data:any){
    this.messageList = data;
    console.log(data, this.messageList, 'data all');
    console.log(data.data, 'data.')
    this.dataSource = new MatTableDataSource<Banner>(
      
  data.data.rows
 

    );
    this.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit() {
    this.MessageListAll();
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((row: Banner) => this.selection.select(row));
  }
  addFilter(){
    this.filterForm = this._formBuilder.group({
      start_date:["", Validators.required],
      end_date:["", Validators.required]
    })
  }
  

  add(){
    this.router.navigate(["/add-banner"])
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
  }
  editRecord(id:any){}
  
  deleteRecord(id:any){
    // if(window.confirm('Are you sure')) {
    //   const data = this.dataSource.data;
    //   data.splice((this.paginator.pageIndex * this.paginator.pageSize) + id, 1);
    //   this.dataSource.data = data;
    //   this.messageTemplate.DeleteMessage(id).subscribe()
    // }
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
        messageTemplate.DeleteMessage({message_template_id: id })
          .subscribe(
            res => {
              console.log(res, 'deleteResp');
              Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
              this.MessageListAll();
            },
            error => {
             
            }
          );
      }
    });
  }
  


}





