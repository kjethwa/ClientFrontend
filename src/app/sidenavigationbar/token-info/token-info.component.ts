import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin.service';
import {TokenInfo} from '../models/TokenInfo';
import {MatSnackBar} from '@angular/material';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-token-info',
  templateUrl: './token-info.component.html',
  styleUrls: ['./token-info.component.css']
})
export class TokenInfoComponent implements OnInit {

  private sessionId: string;

  private tokenInfo: TokenInfo;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(pathvar => {
      this.sessionId = pathvar.get('sessionId');

      this.adminService.lastToken(this.sessionId).subscribe(response => {
        if (response.status === 'SUCCESS') {
          if (isNullOrUndefined(response.message)) {
            this.tokenInfo = {tokenNumber: 0, userName: '', bookingId: '', hasMoreTokens: true};
          } else {
            this.tokenInfo = response.message;
          }
        } else {
          this.snackBar.open(response.message, 'ERROR', {
            duration: 2000,
          });
        }
      });
    });
  }

  nextToken() {
    this.adminService.nextToken(this.sessionId).subscribe(response => {
      if (response.status === 'SUCCESS') {
        this.tokenInfo = response.message;
      } else {
        this.snackBar.open(response.message, 'ERROR', {
          duration: 2000,
        });
      }
    });
  }
}
