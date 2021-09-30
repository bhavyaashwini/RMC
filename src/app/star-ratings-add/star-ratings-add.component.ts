import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StarratingService } from '../services/starrating.service';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-star-ratings-add',
  templateUrl: './star-ratings-add.component.html',
  styleUrls: ['./star-ratings-add.component.css']
})
export class StarRatingsAddComponent implements OnInit {
  vendorForms!: FormGroup;


  constructor(public fb: FormBuilder, private router:Router,
    private starService: StarratingService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.vendorForms = this.fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    console.log(this.vendorForms.value);
    
    if (this.vendorForms.valid) {
      this.starService.starCreate(this.vendorForms.value).subscribe(res => {
        alert("Star Rating Form created Successfully");
         this.router.navigateByUrl('/star-ratings');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/star-ratings"]);
  }
}
