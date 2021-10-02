import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessagetemplateService } from '../services/messagetemplate.service'; 
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-messagetemplateedit',
  templateUrl: './messagetemplateedit.component.html',
  styleUrls: ['./messagetemplateedit.component.css']
})
export class MessagetemplateeditComponent implements OnInit {
  messageForms!: FormGroup;
  name!: string;
  editMessageId!: string;
  id: any;
  isEdit = false;
  ngZone: any;
  actRoute: any;

  constructor(  private _formBuilder: FormBuilder, 
    private router: Router,
       private route: ActivatedRoute,
     private activatedRoute: ActivatedRoute,
     private messageService: MessagetemplateService
     ) {
      this.id = this.route.snapshot.params['id'];
      this.addNewRec();
      // this.activatedRoute.params.subscribe(params => {
      //   this.id = params.id;  
      //   console.log("params", this.id = params.id);  
      // });
      
      
}

  ngOnInit(): void {
    
    this.allmessage();
  
  //  this.messageService
  //       .updateMessage({ message_template_id: this.id })
  //       .subscribe(res => {
  //         console.log(res, 'getOne');
  //         this.messageForms.setValue(res);
  //         console.log("res",res);
  //       });
       
          console.log("messageid", {message_template_id:this.id});
          let msgData= {message_template_id: this.id}
   this.messageService.MessageList(msgData)
  
  .pipe(first())
  .subscribe(x =>{
     this.messageForms.setValue({
    name: x.data.name,
    template_id: x.data.template_id
    
   })
   console.log(x,'datax')
  }
   );

}


  addNewRec() {
        console.log("group", this.messageForms);
        this.messageForms = this._formBuilder.group({
          name: ['', Validators.required],
          template_id: ['', Validators.required]
        });
      }
  
  allmessage() {
   console.log("id", this.id);
    this.messageService.MessageList({}).subscribe(res => {
  console.log(res, 'getall');
});
  }
  onUpdate(){
    
    const data = Object.assign(this.messageForms.value, {
      message_template_id: this.editMessageId
    });
    console.log(this.editMessageId, 'data');
    this.messageService.updateMessage(data).subscribe(
      (res) => {
       this.router.navigateByUrl('/messagetemplate')
      }

    )
 
//     if (window.confirm('Are you sure you want to update?')) {
//     this.messageService.updateMessage(this.route.snapshot.params.id, this.messageForms.value).subscribe((result)=>{
      
//       console.log(result);
//  });
//  this.router.navigate(['/messagetemplate']);
//   }

    }
}
