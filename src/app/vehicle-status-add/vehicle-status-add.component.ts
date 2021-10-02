import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VehiclestatusService } from '../services/vehiclestatus.service';
export interface Subject {
  name: string;
}

@Component({
  selector: 'app-vehicle-status-add',
  templateUrl: './vehicle-status-add.component.html',
  styleUrls: ['./vehicle-status-add.component.css']
})
export class VehicleStatusAddComponent implements OnInit {
   vendorForms!: FormGroup;


  constructor(public fb: FormBuilder, private router:Router,
    private vehicleService: VehiclestatusService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.vendorForms = this.fb.group({
      status_name: ['', [Validators.required]],
      name: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    if (this.vendorForms.valid) {
      this.vehicleService.cancelCreate(this.vendorForms.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/vehicle-status');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/vehicle-status"]);
  }
}

