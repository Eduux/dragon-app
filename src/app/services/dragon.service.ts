import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dragon } from '../models/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private apiUrl: string = "https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

  constructor(public http: HttpClient) { }

  listDragons(){
    return new Promise<Dragon[]>((resolve, reject) =>{
      this.http.get<Dragon[]>(this.apiUrl).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }

  listDragon(id){
    return new Promise<Dragon>((resolve, reject) =>{
      this.http.get<Dragon>(this.apiUrl+ '/' + id).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }

  newDragon(name, type){
    return new Promise((resolve, reject) =>{
      this.http.post(this.apiUrl, {name: name, type: type}).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }

  editDragon(dragon){
    return new Promise((resolve, reject) =>{
      this.http.put(this.apiUrl+ '/' + dragon.id, {name: dragon.name, type: dragon.type}).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }
  

  deletedragon(id){
    return new Promise((resolve, reject) =>{
      this.http.delete(this.apiUrl+"/"+id).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }

}
