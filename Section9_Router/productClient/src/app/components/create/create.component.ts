import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createResponse: any;

  constructor(private _service: ProductDataService) { }

  ngOnInit(): void {
  }

  // Create product method to call the create service
  public createProduct(product:any){
    this._service.create(product).subscribe((res:any)=>{
      this.createResponse = res;
      console.log("Product created successfully:", this.createResponse);
    });
  }

}
