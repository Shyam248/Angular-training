import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
httpOptions: any;
  constructor(private http:HttpClient) { }
  getReview():Observable<any>{
    return this.http.get("http://localhost:4500/reviews");
  }
  postReview(obj:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })

  return this.http.post("http://localhost:4500/reviews",obj,this.httpOptions);
 }
}