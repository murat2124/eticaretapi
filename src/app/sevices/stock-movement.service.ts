import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { StockMomement } from '../Models/stockMovement';

@Injectable({
  providedIn: 'root'
})
export class StockMovementService {

  apiUrl="https://localhost:44376/Api/StockMoments/";
  constructor(private httpClient:HttpClient) { }

    getall():Observable<StockMomement[]>{


      let apiGetall=this.apiUrl+"getall"
        return this.httpClient.get<StockMomement[]>(apiGetall)

    }

    update(stockMomement:StockMomement):Observable<ListResponseModel<StockMomement>>{
        let apiUpdate=this.apiUrl+"update"
        return this.httpClient.post<ListResponseModel<StockMomement>>(apiUpdate,stockMomement)

    }


}
