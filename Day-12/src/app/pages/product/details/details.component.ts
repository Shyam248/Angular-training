import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  products:any;
  details:any;
  reviews:any;
  constructor(private hs:ProductService, private ar:ActivatedRoute, rs:ReviewService){
    rs.getReview().subscribe(
      {
        next:(data:any)=>this.reviews=data,
          error:()=>this.reviews={}
      }
    )
    this.ar.params.subscribe(
      {
        next:(params)=>{
          this.id=params['id']
          this.readData()
        },
        error:()=>this.id=0
      }
    )
  }
  readData(){
    this.hs.getProductById(this.id).subscribe({
      next:(data:any)=>this.products=data,
      error:()=>this.products={}
    })
    this.hs.getDetails(this.id).subscribe({
      next: (data:any)=> this.details =data,
      error: ()=> this.details = {}
      })
  }
}
