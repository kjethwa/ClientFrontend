import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {AdminSessionSummary} from '../models/AdminSessionSummary';
import {MatSnackBar} from '@angular/material';

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

  constructor(private adminService: AdminService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const clientId = 1;
    this.adminService.getSessions(clientId).subscribe(response => {
      console.log(response);
      if (response.status === 'SUCCESS') {
        this.availableSession.push(...response.message);
        this.currentIndex = 0;
        this.size = this.availableSession.length;
        this.currentSession = this.availableSession[this.currentIndex];

      } else {
        this.snackBar.open('Session not found', 'INFO', {
          duration: 2000,
        });
      }
    });
  }

  public nextSession(): void {
    if (this.currentIndex < this.size - 1) {
      this.currentSession = this.availableSession[++this.currentIndex];
    } else {
      this.snackBar.open('Session not found', 'INFO',{
        duration: 2000,
      });
    }
  }

  public previousSession(): void {
    if (this.currentIndex > 0) {
      this.currentSession = this.availableSession[--this.currentIndex];
    } else {
      this.snackBar.open('Session not found', 'INFO', {
        duration: 2000,
      });
    }
  }
}
