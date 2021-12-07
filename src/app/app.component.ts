import { GalleryComponent } from './gallery/gallery.component';
import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver){

  }

  async gallery(){
    this.viewContainerRef.clear();
    const { GalleryComponent } = await import('./gallery/gallery.component')
    this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(GalleryComponent))
  }
ngOnInit(): void {
  Aos.init();
}


}
