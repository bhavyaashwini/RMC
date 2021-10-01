import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MessagetemplateService } from '../services/messagetemplate.service'; 
@Component({
  selector: 'app-message-template-add',
  templateUrl: './message-template-add.component.html',
  styleUrls: ['./message-template-add.component.css']
})
export class MessageTemplateAddComponent implements OnInit {
  messageForms!: FormGroup;
  messageId?: string;
  id: any;

  constructor(public fb: FormBuilder, private router:Router, private dataservice: MessagetemplateService,
    private route: ActivatedRoute) 
  {
    this.route.params.subscribe(params => {
      this.id = params.id;  
      console.log("params", this.id = params.id);  
    });
  }

  ngOnInit(): void {
    this.reactiveForm();
    
  }

  /* Reactive form */
  reactiveForm() {
    console.log("messageForm", this.messageForms=this.fb.group({
      name:['', ]
    }));
    this.messageForms = this.fb.group({
      name: ['', [Validators.required]],
      template_id: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    console.log(this.messageForms.value);
    
    if (this.messageForms.valid) {
      this.dataservice.createMessageTemplate(this.messageForms.value).subscribe(res => {
        alert("Submited Successfully");
         this.router.navigateByUrl('/messagetemplate');
      });
    }
  }
  Cancel(){
    this.router.navigate(["/messagetemplate"]);
  }
}