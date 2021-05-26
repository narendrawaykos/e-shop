import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './app-common/nav-bar/nav-bar.component';
import { AngularMatImportsModule } from './app-common/angular-mat-imports/angular-mat-imports.module';
import { SideNavComponent } from './app-common/side-nav/side-nav.component';
import { HomeComponent } from './e-shop-application/home/home.component';
import { SharedModule } from './e-shop-application/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './e-shop-application/cart/cart.component';
import {  HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './app-common/authentication/login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MyErrorHandler} from './app-common/error-handler/error-handler';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    HomeComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMatImportsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MatDatepickerModule,{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
