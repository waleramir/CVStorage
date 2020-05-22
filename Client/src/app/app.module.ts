import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';

import { UserService } from './shared/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './user/login/login.component';
import { AfterlogtestComponent } from './afterlogtest/afterlogtest.component';
import { ChatComponent } from './chat/chat.component';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AfterlogtestComponent,
    ChatComponent,
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  
  ],
  entryComponents: [
    RegistrationComponent,
    UserComponent,
    LoginComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }