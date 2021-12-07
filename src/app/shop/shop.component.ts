import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Product1Component } from '../product1/product1.component';
import { Barbell2Component } from '../barbell2/barbell2.component';
import { Barbell3Component } from '../barbell3/barbell3.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  panelOpenState = false;
  faDumbbell=faDumbbell
  constructor(private dialog: MatDialog) { }

  opendialog(){
    this.dialog.open(Product1Component)
  }
  barbell2(){
    this.dialog.open(Barbell2Component)
  }
  barbell3(){
    this.dialog.open(Barbell3Component)
  }

  ngOnInit(): void {
  }

}
