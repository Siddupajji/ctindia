import { WeightsComponent } from './weights/weights.component';
import { DumbellsComponent } from './dumbells/dumbells.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'
import { ShopComponent } from './shop/shop.component'
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestingComponent } from './testing/testing.component';
export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
 },
 {
  path: 'home' ,
  //  loadChildren:() => import('./home/home.component').then(m=>m.HomeComponent),
  component: HomeComponent
},
 {
   path: 'shop' ,
   component: ShopComponent
 },
 {
   path: 'gallery',

  //  loadChildren:() => import('./gallery/gallery.component').then(m=>m.GalleryComponent),

   component: GalleryComponent
 },
 {
  path: 'contact',
  component: ContactusComponent
},
{
  path: 'dumbell',
  component: TestingComponent
},

{
  path: 'weight',
  component: WeightsComponent
},
{
  path: 'about',
  component: AboutusComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
