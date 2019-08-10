import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dragon } from '../models/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private apiUrl: string = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

  constructor(public http: HttpClient) { }

  listarDragoes(){
    return new Promise<Dragon[]>((resolve, reject) =>{
      this.http.get<Dragon[]>(this.apiUrl).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }

}
