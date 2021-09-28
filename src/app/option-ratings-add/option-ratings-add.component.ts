import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-option-ratings-add',
  templateUrl: './option-ratings-add.component.html',
  styleUrls: ['./option-ratings-add.component.css']
})
export class OptionRatingsAddComponent implements OnInit {
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
    this.router.navigate(["/star-option"]);
  }
  Cancel(){
    this.router.navigate(["/star-option"]);
  }
}