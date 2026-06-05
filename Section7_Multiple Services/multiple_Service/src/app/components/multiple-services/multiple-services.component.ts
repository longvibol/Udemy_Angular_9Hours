import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { HelloServiceService } from 'src/app/services/hello-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  public helloResponse:any;
  public countryResponse:any;

  constructor(private _helloService: HelloServiceService, private _customerService: CustomerServiceService) { }

  ngOnInit(): void {
   forkJoin([this._helloService.helloService(), this._customerService.getAllCountry()])
   .subscribe(responses => {
    this.helloResponse = responses[0];
    this.countryResponse = responses[1];
   });
  }
}