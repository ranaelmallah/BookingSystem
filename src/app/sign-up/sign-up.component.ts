// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import{UserService}from '../user.service'
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent {
//   signup =  new FormGroup({
//     name:new FormControl('',Validators.required),
//     phone:new FormControl('',Validators.required),
//     email:new FormControl('',Validators.required),
//     password:new FormControl('',Validators.required),
//     password_confirmation:new FormControl('',Validators.required),
//   }
//   );
//   constructor(public _UserService:UserService ,private router:Router){}
//   users:any;
//   postSign(info:any){

//     this._UserService.postsignUp(info).subscribe((result)=>{
//       this.users=result
//       localStorage.setItem('token',this.users.data.token)
//       let url=localStorage.getItem('url')
//       this.router.navigate(['/'+url!.toString()]);

//     })
//   }
// }


import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{UserService}from '../user.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signup =  new FormGroup({
    name:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    password_confirmation:new FormControl('',Validators.required),
  }
  );
  constructor(public _UserService:UserService ,private router:Router){}
  users:any;
  postSign(info:any){

    this._UserService.postsignUp(info).subscribe((result)=>{
      this.users=result
      localStorage.setItem('token',this.users.data.token)
      let url=localStorage.getItem('url')
      if(url)
      {
        this.router.navigate(['/'+url!.toString()]);
      }
      else{
        this.router.navigate(['/']);
      }


    })
  }
}
