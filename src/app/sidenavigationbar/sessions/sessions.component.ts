import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {AdminSessionSummary} from '../models/AdminSessionSummary';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {AppConstant} from '../../AppConstant';

@Component({
  selector: 'app-session',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  public availableSession: AdminSessionSummary[] = [];
  public currentSession: AdminSessionSummary;
  private currentIndex: number;
  private size: number;

  constructor(private adminService: AdminService, private snackBar: MatSnackBar, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const clientId = AppConstant.clientId;
    this.adminService.getSessions(clientId).subscribe(response => {
      console.log(response);
      if (response.status === 'SUCCESS') {
        this.availableSession.push(...response.message);
        this.currentIndex = 0;
        this.size = this.availableSession.length;
        if (this.size === 0) {
          this.displayBar('No sessions found', 'ERROR');
        }
        this.currentSession = this.availableSession[this.currentIndex];
      } else {
        this.displayBar(response.message, 'ERROR');
      }
    });
  }

  public nextSession(): void {
    if (this.currentIndex < this.size - 1) {
      this.currentSession = this.availableSession[++this.currentIndex];
    } else {
      this.displayBar('Session not found', 'INFO');
    }
  }

  public previousSession(): void {
    if (this.currentIndex > 0) {
      this.currentSession = this.availableSession[--this.currentIndex];
    } else {
      this.displayBar('Session not found', 'INFO');
    }
  }

  public startSession(): void {
    if (this.currentSession != null) {
      this.adminService.startSession(this.currentSession.sessionId).subscribe(response => {
        if (response.status === 'SUCCESS') {
          this.router.navigate(['/tokeninfo', this.currentSession.sessionId]);
        } else {
          this.displayBar(response.message, 'ERROR');
        }
      });
    }
  }

  private displayBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
