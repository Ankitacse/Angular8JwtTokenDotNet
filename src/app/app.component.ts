import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8DotnetLoginJwt';
 currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
){
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
}
