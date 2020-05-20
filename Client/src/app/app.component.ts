import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RegistrationComponent } from './user/registration/registration.component'
import { UserComponent } from './user/user.component'
import { RouterOutlet, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "CVS";

  isUserLoggedIn: boolean;

  userDetails;

  constructor(private dialog: MatDialog, private toastr: ToastrService, public service: UserService, private router: Router) {
    this.service.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });

    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  onSignIn() {
    let conf = new MatDialogConfig();
    conf.disableClose = false;
    conf.autoFocus = false;
    conf.width = "30%";
    this.dialog.open(UserComponent, conf)

  }
  onLogout() {
    localStorage.removeItem('token');
    //this.service.isUserLoggedIn.next(false);
    window.location.reload();
    localStorage.setItem('isloggedin', "false");
  }
}