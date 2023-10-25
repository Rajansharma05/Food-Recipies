import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }
  public updateUser(user: any) {
    const url = `http://localhost:8080/api/user/update/${user.id}`;
    console.log(user.id);
    return this.http.put(url, user);
  }
  
  getuserbyid(id: any) {
    const loginUrl = `${this.baseUrl}/api/user/`+id;
    console.log(id);
    return this.http.get(loginUrl);
  }
  public changepass(id:number,password:any){
    return this.http.put('http://localhost:8080/api/user/changepassword/'+id,password);
  }
}
