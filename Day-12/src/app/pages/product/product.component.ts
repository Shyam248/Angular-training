import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productlist:any;
  types=[
    "All",
    "Electronics",
    "Cosmetics",
    "Groceries",
    "Books"
  ]
  selected: string ="All";
  constructor(private hs:ProductService){
    this.hs.getProducts().subscribe(
      {
        next: (data:any)=> this.productlist =data,
        error: ()=> this.productlist=[]
      }
    )
  }
  min_value:number=100;
  max_value:number=100000;
}
