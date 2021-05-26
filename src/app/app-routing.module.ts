import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app-common/authentication/login/login.component';
import { AppComponent } from './app.component';
import { CartComponent } from './e-shop-application/cart/cart.component';
import { HomeComponent } from './e-shop-application/home/home.component';
import { DetailComponent } from './e-shop-application/shared/detail/detail.component';

const routes: Routes = [
  // {
  //   path: '',
  //   // component: AppComponent,
  //   redirectTo: '/home',
  //   // pathMatch: 'full'
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
