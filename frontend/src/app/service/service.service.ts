import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:3000/datasheet';

  constructor(private http: HttpClient) {}

  getDatasheets(page: number, size: number, search?: string): Observable<any> {
  let url = `${this.apiUrl}?page=${page}&size=${size}`;
  if (search && search.trim() !== '') {
    url += `&search=${search}`;
  }
  return this.http.get<any>(url).pipe(take(1));
}



}
