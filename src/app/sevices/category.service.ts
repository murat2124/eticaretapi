import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Category } from '../Models/category';
import { ReturnStatement, ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44376/Api/Categorys/getall"


  getallCategorys():Observable<ListResponseModel<Category>>{

    return  this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)

  }
}
