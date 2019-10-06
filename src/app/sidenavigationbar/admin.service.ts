import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstant} from '../AppConstant';
import {AdminSessionSummary} from './models/AdminSessionSummary';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class AdminService {
  serverURL = AppConstant.serverURL;

  constructor(private http: HttpClient) {
  }

  getSessions(clientId) {
    const url = this.serverURL + '/admin/sessions/' + clientId;
    return this.http.get<AdminSessionSummary[]>(url);
  }
}
