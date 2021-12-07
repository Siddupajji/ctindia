import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Weight1Component } from '../weight1/weight1.component';
import { Weight2Component } from '../weight2/weight2.component';
import { Weight3Component } from '../weight3/weight3.component';

@Component({
  selector: 'app-weights',
  templateUrl: './weights.component.html',
  styleUrls: ['./weights.component.css']
})
export class WeightsComponent implements OnInit {
  faDumbbell = faDumbbell
  constructor(private dialog: MatDialog) { }

  opendialog(){
    this.dialog.open(Weight1Component)
  }
  barbell2(){
    this.dialog.open(Weight2Component)
  }
  barbell3(){
    this.dialog.open(Weight3Component)
  }

  ngOnInit(): void {
  }

}
