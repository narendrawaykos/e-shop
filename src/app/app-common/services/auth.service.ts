import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  signUpUrl = '/api/signup'
  loginUrl = '/api/login'
  constructor(
    private http: HttpClient
  ) { }
  
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  
  signUp(formValues: any):Observable<any> {
    return this.http.post(this.signUpUrl, formValues);
  }

  login(formValues: any) {
    return this.http.post(this.loginUrl, formValues);
  }
}
