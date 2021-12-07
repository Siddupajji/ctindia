import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent {
  faDumbbell=faDumbbell

  constructor(public dialog: MatDialog) { }



  openDialog() {
    this.dialog.open(AboutusComponent);

  
  }
}

 



export class DialogContentExampleDialog {}

