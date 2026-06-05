import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: any; 
  product: any; 
  createResponse: any;
  updateResponse: any;
  deleteResponse: any;
  productResponse: any;

  id!: number;
  name!: string;
  description!: string;
  price!: number;
  stockQuantity!: number;


  id1!: number;
  name1!: string;
  description1!: string;
  price1!: number;
  id2!: number;
  id3!: number;
  constructor(private _service: ProductDataService) {}

  ngOnInit() {
   this.getAllProducts();
   this.getProduct(1);
  }

  // 0. Get product method to call the get service
  public getProduct(id:number){
    this._service.getProduct(id).subscribe((res:any)=>{
      this.productResponse = res;
      console.log("Product fetched successfully:", this.productResponse);
    });
  }

  public getAllProducts(){
  // 1. Call the service and subscribe to the data
    this._service.getAllProducts().subscribe(
      (data:any) => {
        this.products = data;
      },
      (error:any) => {
        console.error("Error fetching products:", error);
      }
    );
  }

  // 2. Create product method to call the create service
  public createProduct(product:any){
    this._service.create(product).subscribe((res:any)=>{
      this.createResponse = res;
      console.log("Product created successfully:", this.createResponse);
       this.getAllProducts();
    });
  }

  // 3. Update product method to call the update service
  public updateProduct(product:any){
    this._service.update(product).subscribe((res:any)=>{
      this.updateResponse = res;
      console.log("Product updated successfully:", this.updateResponse);
      this.getAllProducts(); // <-- Refreshes the display list instantly
    });
  }

  // 4. Delete product method to call the delete service
  public deleteProduct(id:number){
    this._service.delete(id).subscribe((res:any)=>{
      this.deleteResponse = res;
      console.log("Product deleted successfully:", this.deleteResponse);
      this.getAllProducts(); // <-- Refreshes the display list instantly
    });
  }  

}