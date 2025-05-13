import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:44376/Api/Categorys/getall'; 

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.http.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
