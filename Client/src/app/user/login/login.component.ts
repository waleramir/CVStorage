import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    //if (localStorage.getItem('token') != null)
    //this.router.navigateByUrl('/afterlogtest');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success('Authentication passed!', 'Login successful', {
          positionClass: 'toast-bottom-right'
        });
        localStorage.setItem('isloggedin', "true");
        //this.service.isUserLoggedIn.next(true);
        //this.router.navigateByUrl('/app');
        window.location.reload();
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password', 'Authentication failed', {
            positionClass: 'toast-bottom-right'
          });
        else
          console.log(err);
      }
    );

  }
}