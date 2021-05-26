import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './app-common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'e-shop';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(flag => {
      if (!flag) {
        this.router.navigate(['/login']);
      } else {
        // this.router.navigate(['/home']);
      }
    });
  }
}
