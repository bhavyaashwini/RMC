import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Optionbyrating } from '../models/optionbyrating';
import { OptionbyratingsService } from '../services/optionbyratings.service';
import Swal from 'sweetalert2';
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
  dataSource!: any;
  optionList?: Optionbyrating[];
  displayedColumns = ['id', 'name', 'starid', 'Action'];
  
  // dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);
  statusname: Brand[] = [
    { value: 'online', star_id: '1' },
   
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog,private router:Router, private _formBuilder:FormBuilder,
    private optionService: OptionbyratingsService,
   ) {
    this.addFilter();
  }

  optionListAll() {
   
    this.optionService.OptionratingList({}).subscribe(res => {
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
    this.dataSource = new MatTableDataSource<Optionbyrating>(
      
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
    this.router.navigate(["/add-star-option"])
  }
  filter(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    
  }
  deleteRecord(data:any) {
    if(window.confirm('Are you sure you want to delete')) {
      this.optionService.OptionratingDelete({ id: data }).subscribe(result => {
       console.log(result, 'deleteres')
        this.optionListAll();
      })
    }
    
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


