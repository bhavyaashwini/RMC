import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { OptionbyratingsService } from '../services/optionbyratings.service';

@Component({
  selector: 'app-optionratingedit',
  templateUrl: './optionratingedit.component.html',
  styleUrls: ['./optionratingedit.component.css']
})
export class OptionratingeditComponent implements OnInit {
  optionForm!: FormGroup;
  id:any;
  isAddMode!: boolean;

constructor(  private _formBuilder: FormBuilder, 
private router: Router,
private route: ActivatedRoute,
private activatedRoute: ActivatedRoute,
private optionServie: OptionbyratingsService
) {
this.id = this.route.snapshot.params['id'];
this.addNewRec();


}

ngOnInit(): void {

this.allmessage();

   console.log("messageid", {options_by_rating_id:this.id});
   let msgData= {options_by_rating_id: this.id}
this.optionServie.OptionratingList(msgData)

.pipe(first())
.subscribe(x =>{
this.optionForm.setValue({
name: x.data.name,
star_id: x.data.star_id

})
console.log(x,'datax')
}
);

}


addNewRec() {
 console.log("group", this.optionForm);
 this.optionForm = this._formBuilder.group({
   name: ['', Validators.required],
   star_id: ['', Validators.required]
 });
}

allmessage() {
console.log("id", this.id);
this.optionServie.OptionratingList({}).subscribe(res => {
console.log(res, 'getall');
});
}
onSubmit(){

if (window.confirm('Are you sure you want to update?')) {
this.optionServie.OptionratingUpdate(this.route.snapshot.params.id, ).subscribe((result)=>{

console.log(result);
});
this.router.navigate(['/star-option']);
}

}
}

