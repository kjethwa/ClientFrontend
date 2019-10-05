import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-side-navigationbar',
  templateUrl: 'sidenavigationbar.component.html',
  styleUrls: ['sidenavigationbar.component.css'],
})
export class SidenavigationbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = ['Start session' , 'Complete session' , 'Session Details'];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
