import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { StarratingService } from '../services/starrating.service';

@Component({
  selector: 'app-starratingedit',
  templateUrl: './starratingedit.component.html',
  styleUrls: ['./starratingedit.component.css']
})
export class StarratingeditComponent implements OnInit {
  vendorForms!: FormGroup;
  id:any;
  isAddMode!: boolean;

constructor(  private _formBuilder: FormBuilder, 
private router: Router,
private route: ActivatedRoute,
private activatedRoute: ActivatedRoute,
private optionServie: StarratingService
) {
this.id = this.route.snapshot.params['id'];
this.addNewRec();


}

ngOnInit(): void {

this.allmessage();

   console.log("messageid", {star_rating_id:this.id});
   let msgData= {star_rating_id: this.id}
this.optionServie.starList(msgData)

.pipe(first())
.subscribe(x =>{
this.vendorForms.setValue({
name: x.data.name


})
console.log(x.data.name,'datax')
}
);

}


addNewRec() {
 console.log("group", this.vendorForms);
 this.vendorForms = this._formBuilder.group({
   name: ['', Validators.required],
  
 });
}

allmessage() {
console.log("id", this.id);
this.optionServie.starList({}).subscribe(res => {
console.log(res, 'getall');
});
}
onSubmit(){

if (window.confirm('Are you sure you want to update?')) {
this.optionServie.starUpdate(this.route.snapshot.params.id, ).subscribe((result)=>{

console.log(result);
});
this.router.navigate(['/star-ratings']);
}

}
Cancel(){
  this.router.navigate(['/star-ratings']);
}
}

