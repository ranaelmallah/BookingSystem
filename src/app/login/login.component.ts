import { Component } from '@angular/core';
import{FormControl,FormGroup, Validators}from '@angular/forms'
import{UserService}from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),

  }
  );
  constructor(public _UserService:UserService,private router:Router ){}
  users:any
  postLogn(dataa:any) {
    this._UserService.postlogin(dataa).subscribe((result)=>{
      this.users=result
      localStorage.setItem('token',this.users.data.token);
      let url=localStorage.getItem('url')
      if(url)
      {
        this.router.navigate(['/'+url!.toString()]);
      }
      else{
        this.router.navigate(['/']);
      }  })


  }
  logout()
  {
    localStorage.removeItem('token')
  }
}
