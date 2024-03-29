import { Injectable } from '@angular/core';
// http client imported
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  firstClick() {
  	return console.log('Clicked');
  }
  getUsers(){
  	return this.http.get('https://reqres.in/api/users')
  }
}
