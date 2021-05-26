import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  toggleSideNave = false;
  isLoggedIn = false;
  search = new FormControl();
  isLoggedInSubscription: Subscription | undefined;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedInSubscription = this.authService.isLoggedIn.subscribe(flag => {
      this.isLoggedIn = flag;
    });
  }

  logout() {
    this.authService.isLoggedIn.next(false);
  }
  ngOnDestroy(){
    if (this.isLoggedInSubscription !== undefined) {
      this.isLoggedInSubscription.unsubscribe();
    }
  }
  
}
