import { Component } from '@angular/core';
import { HttpServiceService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-items',
  templateUrl: './service-items.component.html',
  styleUrls: ['./service-items.component.css']
})
export class ServiceItemsComponent {
  items:any[]=[];
  governments:any[]=[];
  regions:any[]=[];
  categoryId!:number;
  governmentId:any;
  regionId:any;
  constructor(private httpService:HttpServiceService,private activatedRoute:ActivatedRoute)
  {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params['id'];
    });
    this.callResturants();
    this.callGovernments();
  }
  ///////////////////////////////////////
  callResturants()
  {
    this.httpService.getCategoryElements(this.categoryId).subscribe(
      (data: any) => {
        this.items=[]
        this.items=data.data;        
      },
      (err: any) => {}
    );
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
this.callGovernmentsElements();
  }
  //////////////////////////////////////////
  getResturantsForRegion(ev:any)
  {
    this.regionId=ev.target.value;
    this.callRegionElements();
  }
  //////////////////////////////////////////
  callGovernmentsElements()
  {
    this.httpService.getElementsForGovern(this.categoryId,this.governmentId).subscribe(
      (data: any) => {
        this.items=[]
        this.items=data.data;
       
      },
      (err: any) => {}
    );
  }
  //////////////////////////////////////////
  callRegionElements()
  {
    this.httpService.getElementsForRegion(this.categoryId,this.governmentId,this.regionId).subscribe(
      (data: any) => {
        this.items=[]
        this.items=data.data;
       
      },
      (err: any) => {}
    );
  }
  
}
