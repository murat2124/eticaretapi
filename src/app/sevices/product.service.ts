import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Product } from '../Models/product';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl= "https://localhost:44376/Api/Products/"

  constructor(private httpClient:HttpClient) { }


   getallProducts():Observable<ListResponseModel<Product>>{
   let   newapi=this.apiUrl+"getall"
    return  this.httpClient.get<ListResponseModel<Product>>(newapi);

   }

   getByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{
            let   newapi2="https://localhost:44376/Api/Products/getbyCategoryId?categoryId="+categoryId
    return  this.httpClient.get<ListResponseModel<Product>>(newapi2);

   }

   productAddS(product:Product):Observable<ListResponseModel<Product>>{

    let addApi=this.apiUrl+"add"

      return this.httpClient.post<ListResponseModel<Product>>(addApi,product)

   }
}
