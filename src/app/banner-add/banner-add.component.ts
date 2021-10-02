import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BannerService } from '../services/banner.service';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.css']
})
export class BannerAddComponent implements OnInit {
  vendorForms!: FormGroup;
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  public  value:any
  constructor(public fb: FormBuilder, private router:Router,
    private bannerService: BannerService) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.vendorForms = this.fb.group({
      name: ['', [Validators.required]],
      banner_url: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    // console.log(this.vendorForms.value);
    // this.router.navigate(["/banner"]);
    console.log(this.vendorForms.value);
    
    if (this.vendorForms.valid) {
      this.bannerService.createBanner(this.vendorForms.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/banner');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/banner"]);
  }
  selectFiles(event: any){
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event:any) => {
		 this.value = reader.result
	}
  }
  imageselect(event:any)
  {
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event:any) => {
		 this.value = reader.result
	}
  }


  uploadFiles(){}
}
