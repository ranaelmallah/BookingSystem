import { Component } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpServiceService } from '../http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  categories:any[]=[]
  constructor( private httpService:HttpServiceService){
    this.callCategories()
  }
  onInit()
  {
    window.scrollTo(0,0)
  }
  callCategories()
  {
    this.httpService.getCategories().subscribe(
      (data: any) => {
        this.categories=[]
        this.categories=data.data;        
      },
      (err: any) => {}
    );
  }
}
