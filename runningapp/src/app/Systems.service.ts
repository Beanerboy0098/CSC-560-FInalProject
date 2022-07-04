import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Systems} from './Systems';
import { Observable,   } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class SystemService {
  
    constructor(private http: HttpClient) { }
  
    readonly ROOT_URL = 'http://localhost:8081/api';


    getsystem(): Observable<Systems[]>
    {
      return this.http.get<Systems[]>(this.ROOT_URL + '/getSystems');
    }
    addsystem(newSystem:Systems): Observable<any>
  {
    return this.http.post<any>(this.ROOT_URL + '/addSystems', newSystem);
  }

  deletesystem(id:any): Observable<any>
  {
    return this.http.delete<any>(this.ROOT_URL + '/deletesystem/' + id);
  }
  updatesystem(id:any, Updatedsystem:Systems): Observable<any>
  {
    return this.http.put<any>(this.ROOT_URL + '/updatesystem/' + id, Updatedsystem);
  }

 

  

  getLowlaunchtitles()
  {
    return this.http.get<Systems[]>(this.ROOT_URL + '/lowestlaunchtitles');
  }

  getMostlaunchtitles()
  {
    return this.http.get<Systems[]>(this.ROOT_URL + '/mostlaunchtitles');
  }

 
  }