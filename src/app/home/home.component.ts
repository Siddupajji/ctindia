import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Aos from 'aos';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faDumbbell = faDumbbell
  customOptions: OwlOptions = {
    loop: true,

    mouseDrag: true,
    autoWidth:true,

    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoplay:true,
    autoplayTimeout: 1000,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  testimonialsOptions: OwlOptions = {
    loop: true,

    mouseDrag: true,
    autoWidth:true,

    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    autoplay:true,
    autoplayTimeout: 1000,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: false
  }


  Imagesrc1="../../assets/Ctstrength/04.jpg"
  Imagesrc2="../../assets/Ctstrength/05.jpg"
  Imagesrc3="../../assets/Ctstrength/03.jpg"
  Imagesrc4="../../assets/Ctstrength/02.jpg"


  constructor() { }

  

  imagemode="dumbell1"

  yearscount:number=0;
  customerscount:number=0
  productcount:number=0



  // yearscountstop:any = setInterval(()=>{
  //   this.yearscount++
  //   if(this.yearscount == 13){
  //     clearInterval(this.yearscountstop)
  //   }
  // }, 200)

  // customerscountstop:any = setInterval(()=>{
  //   this.customerscount++
  //   if(this.customerscount == 45){
  //     clearInterval(this.customerscountstop)
  //   }
  // }, 20)

  // productcountstop:any = setInterval(()=>{
  //   this.productcount++
  //   if(this.productcount == 25){
  //     clearInterval(this.productcountstop)
  //   }
  // }, 20)





  ngOnInit(): void {

    Aos.init();
  }

}
