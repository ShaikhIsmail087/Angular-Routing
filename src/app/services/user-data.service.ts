import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  users() {
    return [
      { name: 'anil', age: 25, email: 'anil@test.com' },
      { name: 'Sam', age: 27, email: 'sam@test.com' },
      { name: 'anil', age: 30, email: 'bhasker@test.com' },
      { name: 'peter', age: 34, email: 'peter@test.com' },]
  }
  user() {
    return this.http.get(this.url);
  }

  saveUser(data: any) {
    return this.http.post(this.url, data);
  }

}
