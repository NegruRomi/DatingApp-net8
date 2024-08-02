import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient);
  baseUrl = 'http://localhost:5000/api/';

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
