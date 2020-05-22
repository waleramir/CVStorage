import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RegistrationComponent } from './user/registration/registration.component'
import { UserComponent } from './user/user.component'
import { RouterOutlet, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "CVS";
  images =
    ["../assets/Images/2.jpg ",
      "../assets/Images/3.jpg ",
      "../assets/Images/4.jpg ",
      "../assets/Images/5.jpg ",
      "../assets/Images/6.jpg ",
      "../assets/Images/7.jpg ",
      "../assets/Images/8.jpg ",
      "../assets/Images/9.jpg ",
      "../assets/Images/10.jpg ",
      "../assets/Images/11.jpg ",
      "../assets/Images/12.jpg ",
      "../assets/Images/13.jpg ",
      "../assets/Images/14.jpg ",
      "../assets/Images/15.jpg ",
      "../assets/Images/16.jpg ",
      "../assets/Images/17.jpg ",
      "../assets/Images/18.jpg ",
    ];
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

  onShowImage(image) {
    let confim = new MatDialogConfig();
    confim.disableClose = false;
    confim.autoFocus = false;
    confim.width = "60%";
    confim.height ="90%"
    confim.data = image ;
    this.dialog.open(ImageComponent, confim)

  }
  onLogout() {
    localStorage.removeItem('token');
    //this.service.isUserLoggedIn.next(false);
    window.location.reload();
    localStorage.setItem('isloggedin', "false");
  }
}