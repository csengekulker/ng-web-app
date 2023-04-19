import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchShips() {
    let url = env.apihost + "ships"

    return this.http.get<any>(url)
  }

  storeShip(body: any) { 
    let url = env.apihost + "store"

    let headers = new HttpHeaders()

    headers.append('Content-Type', 'application/json')
    let httpOptions = {
      headers: headers
    }

    return this.http.post(url, body, httpOptions)
  }

  updateShip(id: number) { 
    let url = env.apihost + "update/" + id

    let headers = new HttpHeaders()

    headers.append('Content-Type', 'application/json')
    let httpOptions = {
      headers: headers
    }

    return this.http.put(url, httpOptions)
  }

  deleteShip(id: number) { 
    let url = env.apihost + "destroy/" + id 

    return this.http.delete(url)
  }
}
