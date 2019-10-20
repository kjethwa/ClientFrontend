import {Component, OnInit} from '@angular/core';
import {AdminSessionSummary} from '../models/AdminSessionSummary';
import {AdminService} from '../admin.service';
import {AppConstant} from '../../AppConstant';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-activesession',
  templateUrl: './activesession.component.html',
  styleUrls: ['./activesession.component.css']
})
export class ActivesessionComponent implements OnInit {

  public currentSession: AdminSessionSummary;
  public errorMessage: string;

  constructor(private adminService: AdminService, private snackBar: MatSnackBar) {
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

  private displayBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
