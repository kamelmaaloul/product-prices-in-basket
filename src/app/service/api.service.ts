import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
//fakeStoreApi est une API REST en ligne gratuite que vous pouvez utiliser 
//chaque fois que vous avez besoin de données pseudo-réelles pour votre site
 //de commerce électronique ou d'achat sans exécuter de code côté serveur.
 // C'est génial pour l'enseignement, les exemples de codes, les tests, etc.

