import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  contactForm: FormGroup;

  nameCtrl: FormControl;
  emailCtrl: FormControl;
  subjectCtrl: FormControl;
  messageCtrl: FormControl;

  contactTitle:String = 'Contact persoon: Peter De Brombeer';

  constructor(private fb: FormBuilder) {
    this.nameCtrl = fb.control('',Validators.required);
    this.emailCtrl = fb.control('',[Validators.required, Validators.email]);
    this.subjectCtrl = fb.control('',Validators.required);
    this.messageCtrl = fb.control('',Validators.required);

    this.createForm();
   }

   createForm(){
     this.contactForm = this.fb.group({
       name: this.nameCtrl,
       email:this.emailCtrl,
       subject:this.subjectCtrl,
       message:this.messageCtrl
     })
   }

  handle(){
    console.log('handle action');
    console.log(this.contactForm.value);
  }
}