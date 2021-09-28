
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {SelectionModel} from '@angular/cdk/collections';
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


  constructor(public fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.vendorForms = this.fb.group({
      status_name: ['', [Validators.required]],
      color_code: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    console.log(this.vendorForms.value);
    this.router.navigate(["/vehicle-category"]);
  }
  Cancel(){
    this.router.navigate(["/vehicle-category"]);
  }
}

