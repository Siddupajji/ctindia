import { Component, OnInit, Renderer2,AfterViewInit, } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  faDumbbell = faDumbbell
 
  
  
  constructor() { }

  ngOnInit(): void {
  }

 
  
}
