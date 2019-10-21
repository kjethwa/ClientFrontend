import {Component, OnInit} from '@angular/core';
import {AdminSessionSummary} from '../models/AdminSessionSummary';
import {AdminService} from '../admin.service';
import {AppConstant} from '../../AppConstant';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-activesession',
  templateUrl: './activesession.component.html',
  styleUrls: ['./activesession.component.css']
})
export class ActivesessionComponent implements OnInit {

  public currentSession: AdminSessionSummary;
  public errorMessage: string;

  constructor(private adminService: AdminService, private snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    const clientId = AppConstant.clientId;
    this.adminService.getActiveSession(clientId).subscribe(response => {
      if (response.status === 'SUCCESS') {
        this.currentSession = response.message;
      } else {
        this.errorMessage = response.message;
        this.displayBar(response.message, 'ERROR');
      }
    }, error => {
    });
  }

  continueSession() {
    if (!isNullOrUndefined(this.currentSession)) {
      this.router.navigate(['/tokeninfo', this.currentSession.sessionId]);
    }
  }

  completeSession() {
    if (!isNullOrUndefined(this.currentSession)) {
      this.adminService.completeSession(this.currentSession.sessionId).subscribe(response => {
        this.displayBar(response.message, response.status === 'SUCCESS' ? 'INFO' : 'ERROR');
      });
    }
  }

  private displayBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
