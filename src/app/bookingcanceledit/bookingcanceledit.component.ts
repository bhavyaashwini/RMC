import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CancelbookingService } from '../services/cancelbooking.service';

@Component({
  selector: 'app-bookingcanceledit',
  templateUrl: './bookingcanceledit.component.html',
  styleUrls: ['./bookingcanceledit.component.css']
})
export class BookingcanceleditComponent implements OnInit {
  cancelForms!: FormGroup;
  id:any;
  isAddMode!: boolean;

constructor(  private _formBuilder: FormBuilder, 
private router: Router,
private route: ActivatedRoute,
private activatedRoute: ActivatedRoute,
private optionServie: CancelbookingService
) {
this.id = this.route.snapshot.params['id'];
this.addNewRec();


}

ngOnInit(): void {

this.allmessage();

   console.log("messageid", {cancel_booking_id:this.id});
   let msgData= {cancel_booking_id: this.id}
this.optionServie.cancelList(msgData)

.pipe(first())
.subscribe(x =>{
this.cancelForms.setValue({
// name: 'bhavya',
name: x.data.name



})
console.log(x.data.name,'datax')
}
);

}


addNewRec() {
 console.log("group", this.cancelForms);
 this.cancelForms = this._formBuilder.group({
   name: ['', Validators.required],
  
 });
}

allmessage() {
console.log("id", this.id);
this.optionServie.cancelList({}).subscribe(res => {
console.log(res, 'getall');
});
}
onSubmit(){

if (window.confirm('Are you sure you want to update?')) {
this.optionServie.cancelUpdate(this.route.snapshot.params.id, ).subscribe((result)=>{

console.log(result);
});
this.router.navigate(['/booking-cancel']);
}

}
Cancel(){
  this.router.navigate(['/booking-cancel']);
}
}

