import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CancelbookingService } from '../services/cancelbooking.service';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-booking-cancel-add',
  templateUrl: './booking-cancel-add.component.html',
  styleUrls: ['./booking-cancel-add.component.css']
})
export class BookingCancelAddComponent implements OnInit {
  cancelForms!: FormGroup;


  constructor(public fb: FormBuilder, private router:Router,
    private cancelService: CancelbookingService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.cancelForms = this.fb.group({
      name: ['', [Validators.required]],
      
      
    })
  }

  
  onSubmit(){
    console.log(this.cancelForms.value);
    
    if (this.cancelForms.valid) {
      this.cancelService.cancelCreate(this.cancelForms.value).subscribe(res => {
        alert("cancel booking created successfully");
         this.router.navigateByUrl('/booking-cancel');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/booking-cancel"]);
  }
}

