import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Student } from '../student.model';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public subjectArray! : Student[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetStudentForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  studentForm!: FormGroup;
  // subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];
  id: any;
  
  constructor(
    public fb: FormBuilder,
   
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private studentApi: ApiService,
    private formBuilder: FormBuilder, 
    private router: Router,
     private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;  
      console.log("params", this.id = params.id);  
    });
    this.updateBookForm();
  }
  ngOnInit() {
  this.getEmployeeById(this.id);
   
  
  }
 
  

   // To Single Employee Details By ID
 getEmployeeById(id: any) {
    this.studentApi.GetStud(this.id)
                .pipe(first())
                .subscribe(x => this.studentForm.patchValue(x));
  }
 
/* Reactive book form */
updateBookForm() {
  this.studentForm = this.formBuilder.group({
    student_name: ['', [Validators.required]],
    student_email: ['', [Validators.required]],
    section: ['', [Validators.required]],
    subjects: [this.subjectArray],
    dob: ['', [Validators.required]],
    gender: ['Male']
  })
}


  /* Remove dynamic languages */
  remove(subject: Student): void {
   
  }

  /* Date */
  formatDate(e: any) {
   
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateStudentForm() {
    console.log(this.studentForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.studentApi.updateStudent(this.actRoute.snapshot.params.id, this.myNgForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/list'))
      });
    }
  }
  
}


