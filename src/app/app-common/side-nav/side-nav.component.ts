import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewInit, OnChanges {
  mobileQuery: MediaQueryList;
  filterNav = ['Orders', 'Settings', 'My Account']
  @ViewChild('snav') snav: MatSidenav | undefined;
  @Input('toggle') toggleSideNav: any;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnChanges() {
    if (this.snav !== undefined) {
      if (this.toggleSideNav) {
        this.snav.open();
      } else {
        this.snav.close();
      }
    }
  }

  ngAfterViewInit() {
    // if (this.snav !== undefined) {
    //   if (this.toggleSideNav) {
    //     this.snav.open();
    //   } else {
    //     this.snav.close();
    //   }
    // }
  }

  ngOnInit(): void {
   
  }

}
