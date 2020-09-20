import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Response {
  data: any;
  statusCode: number;
  message: string;
  isSuccessful: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private httpClient: HttpClient) { }

/**
 * This sends applicant data to provider API
 *
 * @param {*} payload this payload contains the information about the applicant
 * @returns {Observable<any>}
 * @memberof RegisterService
 */
registerApplicant(payload: any): Observable<any> {
    // return this.httpClient.post(`${environment.quessLocalAPI}/register`, payload);
    return this.httpClient.post(`${environment.quessProdAPI}/register`, payload);
  }
}
