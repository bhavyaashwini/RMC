import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banneredit',
  templateUrl: './banneredit.component.html',
  styleUrls: ['./banneredit.component.css']
})
export class BannereditComponent implements OnInit {
  vendorForms! : FormGroup
  id:any;
  isAddMode!: boolean;

constructor(  private _formBuilder: FormBuilder, 
private router: Router,
private route: ActivatedRoute,
private activatedRoute: ActivatedRoute,
private optionServie: BannerService
) {
this.id = this.route.snapshot.params['id'];
this.addNewRec();


}

ngOnInit(): void {

this.allmessage();

   console.log("messageid", {banner_id:this.id});
   let msgData= {banner_id: this.id}
this.optionServie.MessageList(msgData)

.pipe(first())
.subscribe(x =>{
this.vendorForms.setValue({
// name: x.data.name,
// banner_url: x.data.banner_url
// name: '',
// banner_url:''
name:x.data[0].name,
banner_url:x.data[0].banner_url

})
console.log(x,'datax')
}
);

}


addNewRec() {
 console.log("group", this.vendorForms);
 this.vendorForms = this._formBuilder.group({
   name: ['', Validators.required],
   banner_url: ['', Validators.required]
 });
}

allmessage() {
console.log("id", this.id);
this.optionServie.MessageList({}).subscribe(res => {
console.log(res, 'getall');
});
}
onSubmit(){

if (window.confirm('Are you sure you want to update?')) {
this.optionServie.updateMessage(this.route.snapshot.params.id, ).subscribe((result)=>{

console.log(result);
});
this.router.navigate(['/banner']);
}

}
Cancel(){}
}

