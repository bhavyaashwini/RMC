
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {SelectionModel} from '@angular/cdk/collections';
import { VehiclecategoryService } from '../services/vehiclecategory.service';
export interface Subject {
  name: string;
}

@Component({
  selector: 'app-vehicle-category-add',
  templateUrl: './vehicle-category-add.component.html',
  styleUrls: ['./vehicle-category-add.component.css']
})
export class VehicleCategoryAddComponent implements OnInit {
   vendorForms!: FormGroup;
   public  value:any

  constructor(public fb: FormBuilder, private router:Router, 
    private vehicleService: VehiclecategoryService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.vendorForms = this.fb.group({
      status_name: ['', [Validators.required]],
      chareg_per_km: ['', [Validators.required]],
      charge_per_min: ['', [Validators.required]],
      future_date: ['', [Validators.required]],
      gap_mint: ['', [Validators.required]],
      icon_url: ['', [Validators.required]],
      interval_mint: ['', [Validators.required]],
      limit_km: ['', [Validators.required]],
      mint_charge: ['', [Validators.required]],
      block_mins: ['', [Validators.required]],
      batching_limitkm: ['', [Validators.required]],
      accepted_second: ['', [Validators.required]],
      booking_gap:['', Validators.required]
      
    })
  }
  selectFiles(event: any){
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event:any) => {
		 this.value = reader.result
	}
  }
  onSubmit(){
    // console.log(this.vendorForms.value);
    // this.router.navigate(["/vehicle-category"]);
    console.log(this.vendorForms.value);
    
    if (this.vendorForms.valid) {
      this.vehicleService.cancelCreate(this.vendorForms.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/vehicle-category');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/vehicle-category"]);
  }
}

