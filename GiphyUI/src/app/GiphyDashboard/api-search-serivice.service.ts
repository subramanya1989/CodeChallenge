import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiSearchSeriviceService {

  baseURL = "http://api.giphy.com/v1/gifs/search?q=";
  link = "&api_key=eRUfCv1D4x0MK9TGsmnWp0Tdq6R6Rdqm&limit=";

  constructor(private httpClient:HttpClient) { }

  getData(searchTerm: String,limit:Number){
    let apiLink = this.baseURL + searchTerm + this.link + limit;
    return this.httpClient.get(apiLink);
  }

}
