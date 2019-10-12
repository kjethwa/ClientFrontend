import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstant} from '../AppConstant';
import {ResponseStatus} from './models/ResponseStatus';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class AdminService {
  serverURL = AppConstant.serverURL;

  constructor(private http: HttpClient) {
  }

  getSessions(clientId) {
    const url = this.serverURL + '/admin/sessions/' + clientId;
    return this.http.get<ResponseStatus>(url);
  }

  startSession(sessionId) {
    const url = this.serverURL + '/admin/startsession/' + sessionId;
    return this.http.get<ResponseStatus>(url);
  }

  nextToken(sessionId) {
    const url = this.serverURL + '/admin/nexttoken/' + sessionId;
    return this.http.get<ResponseStatus>(url);
  }

}
