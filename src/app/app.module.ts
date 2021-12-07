import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { AppRoutingModule,} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxNavbarModule} from 'ngx-bootstrap-navbar';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GalleryComponent } from './gallery/gallery.component';
import {MatMenuModule} from '@angular/material/menu';
import { ContactusComponent } from './contactus/contactus.component';
import { DumbellsComponent } from './dumbells/dumbells.component';
import { WeightsComponent } from './weights/weights.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { LazyImageModule } from 'ng-lazy-image';
import { Product1Component } from './product1/product1.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import {MatGridListModule} from '@angular/material/grid-list';
import { TestingComponent } from './testing/testing.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Barbell2Component } from './barbell2/barbell2.component';
import { Barbell3Component } from './barbell3/barbell3.component';
import { Weight1Component } from './weight1/weight1.component';
import { Weight2Component } from './weight2/weight2.component';
import { Weight3Component } from './weight3/weight3.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    GalleryComponent,
    ContactusComponent,
    DumbellsComponent,
    WeightsComponent,
    AboutusComponent,
    Product1Component,
    TestingComponent,
    Barbell2Component,
    Barbell3Component,
    Weight1Component,
    Weight2Component,
    Weight3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NavbarModule,
    NgxNavbarModule,
    CarouselModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    LazyImageModule,
    LazyLoadImagesModule,
    MatGridListModule,
    MatTabsModule

  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
