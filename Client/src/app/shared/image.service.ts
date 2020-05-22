import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  testFolder = './../assets/Images/';
  fs = require('fs');
  constructor(
    private http: HttpClient) { }
  onsm() {
    this.fs.readdirSync(this.testFolder).forEach(file => {
      console.log(file);
    })
  }


  
}
