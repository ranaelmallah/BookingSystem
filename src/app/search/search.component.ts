import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators }from '@angular/forms';
import { HttpServiceService } from '../http.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  items:any[]=[];
  governments:any[]=[];
  regions:any[]=[];
  categories:any[]=[];
  catId!:number;
  governmentId:any;
  showItem:boolean=false;
  regionId:any;
 search = new FormGroup({
  service:new FormControl('',Validators.required),
  region:new FormControl('',Validators.required),
  governorate:new FormControl('',Validators.required),
 }
 );
 ser(){
  console.log(this.search)
}
constructor(private httpService:HttpServiceService)
{
  this.callCategories()
this.callGovernments()
}
///////////////////////////////////////
callGovernments()
{
  this.httpService.getGovernments().subscribe(
    (data: any) => {
      this.governments=data;
    },
    (err: any) => {}
  );
}
///////////////////////////////////////

callRegions(regId:number)
{
  this.httpService.getRegions(regId).subscribe(
    (data: any) => {
      this.regions=data;
      
    },
    (err: any) => {}
  );
}
//////////////////////////////////////////
getRegionsForGovernment(ev:any)
{
  this.governmentId=ev.target.value;
this.callRegions(ev.target.value);
}
//////////////////////////////////////////
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
getItemsForRegion(ev:any)
{
  this.regionId=ev.target.value;
  this.httpService.getElementsForRegion(this.catId,this.governmentId,this.regionId).subscribe(
    (data: any) => {
      this.items=[]
      this.items=data.data;
     
    },
    (err: any) => {}
  );
}
changeCategory(ev:any)
{
  this.catId=ev.target.value;

}
scrollPage()
{
  window.scrollTo(0,500)
}
}

