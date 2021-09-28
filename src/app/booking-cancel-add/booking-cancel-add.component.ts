import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-booking-cancel-add',
  templateUrl: './booking-cancel-add.component.html',
  styleUrls: ['./booking-cancel-add.component.css']
})
export class BookingCancelAddComponent implements OnInit {
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
    this.router.navigate(["/booking-cancel"]);
  }
  Cancel(){
    this.router.navigate(["/booking-cancel"]);
  }
}

