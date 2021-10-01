
import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import { MessagetemplateService } from '../services/messagetemplate.service';
import { Messagetemplate } from '../models/messagetemplate';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
export interface Brand {
  value: string;
  template_id:any;
}


@Component({
  selector: 'app-message-template',
  templateUrl: './message-template.component.html',
  styleUrls: ['./message-template.component.css']
})
export class MessageTemplateComponent  implements OnInit{
  filterForm!:FormGroup;
  dataSource!: any;
  messageList?: Messagetemplate[];
  displayedColumns = [ 'name', 'templateid', 'Action'];
  
 
  selection = new SelectionModel<Messagetemplate>(true, []);
  statusname: Brand[] = [
    { value: 'online', template_id: '1' },
   ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder,
     private messageTemplate: MessagetemplateService) {
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
    this.dataSource = new MatTableDataSource<Messagetemplate>(
      
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
        this.dataSource.data.forEach((row: Messagetemplate) => this.selection.select(row));
  }
  addFilter(){
    this.filterForm = this._formBuilder.group({
      start_date:["", Validators.required],
      end_date:["", Validators.required]
    })
  }
  

  add(){
    this.router.navigate(["/add-message"])
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
// export interface UsersData {
//   template_id:any;
//  name:any;

// }

// const ELEMENT_DATA: UsersData[] = [
//   {name:'hello',template_id: '123'},
//   {name:'hello',template_id: '123'},
//   {name:'hello',template_id: '123'},
  
// ];



