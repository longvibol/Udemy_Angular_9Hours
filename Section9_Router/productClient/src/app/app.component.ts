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


}