import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AppComponent } from './app.component';
import { AfterlogtestComponent } from './afterlogtest/afterlogtest.component';
import { ChatComponent } from './chat/chat.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [

  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'afterlogtest', component: AfterlogtestComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
    outlet: 'popup'
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'popup'
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'popup'
  },
  {
    path: 'image',
    component: ImageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
