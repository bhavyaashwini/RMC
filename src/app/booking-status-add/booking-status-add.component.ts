import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BookingstatusService } from '../services/bookingstatus.service';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-booking-status-add',
  templateUrl: './booking-status-add.component.html',
  styleUrls: ['./booking-status-add.component.css']
})
export class BookingStatusAddComponent implements OnInit {
  statusForms!: FormGroup;


  constructor(public fb: FormBuilder, private router:Router, 
    private bookingService: BookingstatusService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.statusForms = this.fb.group({
      role_name: ['', [Validators.required]],
      name: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    console.log(this.statusForms.value);
    
    if (this.statusForms.valid) {
      this.bookingService.cancelCreate(this.statusForms.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/booking-status');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/booking-status"]);
  }
}
