import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin.service';
import {TokenInfo} from '../models/TokenInfo';

@Component({
  selector: 'app-token-info',
  templateUrl: './token-info.component.html',
  styleUrls: ['./token-info.component.css']
})
export class TokenInfoComponent implements OnInit {

  private sessionId: string;

  private tokenInfo: TokenInfo;

  constructor(private route: ActivatedRoute, private adminService: AdminService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(pathvar => {
      this.sessionId = pathvar.get('sessionId');

      this.nextToken();
    });
  }

  nextToken() {
    this.adminService.nextToken(this.sessionId).subscribe(response => {
      console.log(response);
      if (response.status === 'SUCCESS') {
        this.tokenInfo = response.message;
      } else {
        console.log(response);
      }
    });
  }
}
