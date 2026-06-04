import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  public helloResponse:any;
  public countryResponse:any;
  public testshow:any = "Hello You";

  constructor(private _helloService: HelloServiceService, private _customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this._helloService.helloService().subscribe((res:any)=>this.helloResponse=res);
    this._customerService.getAllCountry().subscribe((res:any)=>this.countryResponse=res);
  }

}
