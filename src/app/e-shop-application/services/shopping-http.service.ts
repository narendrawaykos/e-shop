import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingHttpService {

  private readonly BASE_URL = 'http://localhost:8080/';

  private getAllProductUrl = '/api/shop/getallproducts'
  constructor(
    private http: HttpClient
  ) { }

  public getAllProduct() {
    return this.http.get(this.getAllProductUrl );
  }
}
