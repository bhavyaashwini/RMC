import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OptionbyratingsService } from '../services/optionbyratings.service';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-option-ratings-add',
  templateUrl: './option-ratings-add.component.html',
  styleUrls: ['./option-ratings-add.component.css']
})
export class OptionRatingsAddComponent implements OnInit {
  optionForm!: FormGroup;


  constructor(public fb: FormBuilder, private router:Router,
    private optionService: OptionbyratingsService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.optionForm = this.fb.group({
      
      name: ['', [Validators.required]],
      star_id: ['', [Validators.required]],
      
      
    })
  }

  onSubmit(){
    // console.log(this.optionForm.value);
    // this.router.navigate(["/star-option"]);
    console.log(this.optionForm.value);
    
    if (this.optionForm.valid) {
      this.optionService.createOptionrating(this.optionForm.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/star-option');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/star-option"]);
  }
}