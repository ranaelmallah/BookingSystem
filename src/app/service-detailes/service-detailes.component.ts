import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
@Component({
  selector: 'app-service-detailes',
  templateUrl: './service-detailes.component.html',
  styleUrls: ['./service-detailes.component.css']
})
export class ServiceDetailesComponent {
  detailes:any;
  prodId:any;
  placeLocation:any;
  constructor(private router:Router,private location: Location,private sanitizer: DomSanitizer,private httpService:HttpServiceService,private route:Router,private activatedRoute:ActivatedRoute)
  {
    //this.placeLocation = this.sanitizer.bypassSecurityTrustResourceUrl(this.placeLocation);

    this.activatedRoute.params.subscribe(params => {
      this.prodId = params['id'];
    this.callElement();
    });
  }
  convertBase64ToString(base64String: any) {
    return atob(base64String);
  }
  callElement()
  {
    this.httpService.getSelectedElement(this.prodId).subscribe(
      (data: any) => {
        this.detailes=[]
        this.detailes=data.data;
        this.placeLocation = this.convertBase64ToString(this.detailes.details.location)
        this.placeLocation=this.sanitizer.bypassSecurityTrustResourceUrl(this.placeLocation)
      },
      (err: any) => {}
    );
  }
  callBookTAble(tableId:any)
  {
    if(localStorage.getItem('token'))
    {
    let obj={
      product_id:this.prodId,
      item_id:tableId
  }
    this.httpService.bookTable(obj).subscribe(
      (data: any) => {
        this.callElement();
      },
      (err: any) => {}
    );

  }
else{
  this.router.navigate(['/login']);
    let url=this.location.path()
  localStorage.setItem("url",url)
}}
callBookRoom(tableId:any)
  {
    if(localStorage.getItem('token'))
    {
    let obj={
      product_id:this.prodId,
      item_id:tableId
  }
    this.httpService.bookRoom(obj).subscribe(
      (data: any) => {
        this.callElement();
      },
      (err: any) => {}
    );

  }
else{
  this.router.navigate(['/login']);
    let url=this.location.path()
  localStorage.setItem("url",url)
}}
callBookMedical (id:any,type:any)
{
  if(localStorage.getItem('token'))
  {
  let obj={
    product_id:this.prodId,
    item_id:id,
    type:type
}
  this.httpService.bookMedical(obj).subscribe(
    (data: any) => {
      this.callElement();
    },
    (err: any) => {}
  );

}
else{
this.router.navigate(['/login']);
  let url=this.location.path()
localStorage.setItem("url",url)
}}
}
