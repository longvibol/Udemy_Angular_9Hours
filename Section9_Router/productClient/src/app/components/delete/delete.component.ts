import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  deleteResponse:any;
  id3!: number;

  constructor(private _service: ProductDataService) { }

  ngOnInit(): void {
  }

    // 4. Delete product method to call the delete service
  public deleteProduct(id:number){
    this._service.delete(id).subscribe((res:any)=>{
      this.deleteResponse = res;
      console.log("Product deleted successfully:", this.deleteResponse);
      
    });
  }  

}
