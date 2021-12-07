import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin','*')

  constructor(private http: HttpClient) { }



  sendEmail(url: string, data: any){
    return this.http.post(url, data, {'headers':this.headers})
  }



}
