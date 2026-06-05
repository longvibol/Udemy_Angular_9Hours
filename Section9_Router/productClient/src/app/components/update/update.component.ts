import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateResponse: any;

  constructor(private _service: ProductDataService) { }

  ngOnInit(): void {
  }

  // Update product method to call the update service
  public updateProduct(product:any){
    this._service.update(product).subscribe((res:any)=>{
      this.updateResponse = res;
      console.log("Product updated successfully:", this.updateResponse);
    });
  }

}
