import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteOnboardeeService {

  constructor(
    private http: HttpClient

  ) { }

  deleteOnboardee(id: number) {
    return this.http.delete<void>(`http://localhost:8080/delete/${id}`);
  }
}
