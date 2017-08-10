import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  contactForm: FormGroup;

  contactTitle:String = 'Contact persoon: Peter De Brombeer';

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.contactForm = this.fb.group({
       name: ['', Validators.required],
       email:['', Validators.required],
       subject:['', Validators.required],
       message:['', Validators.required]
     })
   }
}