
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parameters: any) : Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines?country=' +
    parameters.country + '&category=' + parameters.category + 
    '&apiKey=3f99369f81ac41008c8322f16b4b818f';

    return this.http.get(url);
  }
}
