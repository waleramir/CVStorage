import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image: string;

  constructor(@Inject(MAT_DIALOG_DATA)public data:any) {
    this.image = '../'+data;
  }

  ngOnInit(): void {
  }

}
