import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-message-template-add',
  templateUrl: './message-template-add.component.html',
  styleUrls: ['./message-template-add.component.css']
})
export class MessageTemplateAddComponent implements OnInit {
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
    this.router.navigate(["/messagetemplate"]);
  }
  Cancel(){
    this.router.navigate(["/messagetemplate"]);
  }
}