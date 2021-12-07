import { Component, OnInit,  ComponentFactoryResolver, ViewContainerRef  } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showFiller = false;

  faHome = faHome;
  faShoppingCart = faShoppingCart
  faPhotoVideo = faPhotoVideo
  faPhone = faPhone
  faUserFriends = faUserFriends
  faDumbbell = faDumbbell

  constructor( private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  async Home(){
    this.viewContainerRef.clear();
    const { HomeComponent } = await import('../home/home.component')
    this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(HomeComponent))
  }


}
