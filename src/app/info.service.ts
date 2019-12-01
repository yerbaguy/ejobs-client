import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { RootObject } from 'src/RootObject';



const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})



export class InfoService {


  private categories = "http://localhost:8080/api/getcategories";



  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

       console.error(error, 'Operation: ${operation}');

       return of(result as T);
    }

  }

  constructor(private http: HttpClient) { }



  getCategories() : Observable<RootObject[]> {
 // getCategories() : any { 

    return this.http.get<RootObject[]>(this.categories);

  }




  

}
