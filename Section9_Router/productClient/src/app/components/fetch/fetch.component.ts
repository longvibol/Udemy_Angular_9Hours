import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  id2!: number;
  productResponse:any;

  constructor(private _service: ProductDataService ) { }

  ngOnInit(): void {
  }

  // 0. Get product method to call the get service
  public getProduct(id:number){
    this._service.getProduct(id).subscribe((res:any)=>{
      this.productResponse = res;
      console.log("Product fetched successfully:", this.productResponse);
    });
  }

}
