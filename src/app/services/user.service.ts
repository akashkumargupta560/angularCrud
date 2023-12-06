import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = 'http://localhost:3000/posts/';
  constructor(private httpSrv:HttpClient) { }

  postUserApi(data:any){
    return this.httpSrv.post<any>(this.baseUrl,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getUserApi(){
    return this.httpSrv.get<any>(this.baseUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateUserApi(data:any,id:any){
    return this.httpSrv.put<any>(this.baseUrl+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUserApi(id:any){
    return this.httpSrv.delete(this.baseUrl+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
