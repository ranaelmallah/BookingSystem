import { Component } from '@angular/core';
import{FormControl,FormGroup, FormGroupDirective, Validators}from '@angular/forms'
import{UserService}from '../user.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact= new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    subject:new FormControl(),
    message:new FormControl('',Validators.required)
  }
  );

  constructor(public _UserService:UserService ){}
  getInfoFromUser(data:any) {
    this._UserService.postContact(data).subscribe((result)=>{
      console.log(result)
    })
    
  }
}
