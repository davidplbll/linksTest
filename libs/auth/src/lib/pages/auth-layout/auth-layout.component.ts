import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mo-links-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {
  loginView = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  redirectSignup(): void {
    if (this.loginView) {
      this.router.navigate(['auth/signup']);
    } else {
      this.router.navigate(['auth']);
    }
  }
  routerChange(): void {
    this.loginView = this.router.url.split('/').pop() !== 'signup';
  }
}
