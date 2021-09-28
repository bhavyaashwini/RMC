import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-user-role-add',
  templateUrl: './user-role-add.component.html',
  styleUrls: ['./user-role-add.component.css']
})
export class UserRoleAddComponent implements OnInit {
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
    this.router.navigate(["/user-role"]);
  }
  Cancel(){
    this.router.navigate(["/user-role"]);
  }
}

