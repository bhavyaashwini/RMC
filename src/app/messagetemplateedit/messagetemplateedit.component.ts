import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessagetemplateService } from '../services/messagetemplate.service'; 
@Component({
  selector: 'app-messagetemplateedit',
  templateUrl: './messagetemplateedit.component.html',
  styleUrls: ['./messagetemplateedit.component.css']
})
export class MessagetemplateeditComponent implements OnInit {
  messageForms!: FormGroup;
  editMessageId!: string;
  id: any;
  isEdit = false;
  constructor(  private formBuilder: FormBuilder, 
    private router: Router,
       private route: ActivatedRoute,
     private activatedRoute: ActivatedRoute,
     private messageService: MessagetemplateService
     ) {
      // this.editMessageId = this.route.params['value'].subsId;
      this.route.params.subscribe(params => {
        this.id = params.id;  
        console.log("params", this.id = params.id);  
      });
}

  ngOnInit(): void {
    this.addNewRec();
    this.allmessage();
  // edit 
   if (this. editMessageId!= null) {
    this.isEdit = true;
    this.messageService
      .MessageList({ template_id: this.editMessageId })
      .subscribe(res => {
        console.log(res, 'getOne sus');
        this.messageForms.patchValue(res);
      });
  }
      }
      addNewRec() {
        this.messageForms = this.formBuilder.group({
          name: ['', Validators.required],
          template_id: ['', Validators.required]
        });
      }
       //Get all
  allmessage() {
    this.messageService.MessageList({}).subscribe(res => {
      console.log(res, 'all');
    });
  }

  onUpdate(){
    console.log(this.messageForms.value);
    
    if (this.messageForms.valid) {
      this.messageService.updateMessage(this.messageForms.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/messagetemplate');
      });
    }
  }
}
