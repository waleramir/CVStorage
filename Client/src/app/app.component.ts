import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RegistrationComponent } from './user/registration/registration.component'
import { UserComponent } from './user/user.component'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }
  title = "Angular";

  onSignIn() {
    let conf = new MatDialogConfig();
    conf.disableClose = false;
    conf.autoFocus = false;
    conf.width = "30%";

    this.dialog.open(UserComponent,conf)
   
  }
}