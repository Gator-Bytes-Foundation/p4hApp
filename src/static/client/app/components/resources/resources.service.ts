import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  
  constructor(private http: HttpClient) { }
  
  getResourceFolders(): Observable<any> {
    const url = '/api/getResourceFolders'; 
    return this.http.get<any>(url);
  }

  fileDownload(page_to_load: string): Observable<any> {
    const url = '/api/fileDownload'; 
    return this.http.get<any>(url, {params: {page_to_load}});
  }

  filesPage(page_to_load: string): Observable<any> {
    const url = '/api/filesPage'; 
    return this.http.get<any>(url, {params: {page_to_load}});
  }
}
