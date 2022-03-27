import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './components/home/home.component';

import { LocationsComponent } from './components/locations/locations.component';
import { PayoutComponent } from './components/payout/payout.component';
import { ProductBaseComponent } from './components/restaurant/product-base/product-base.component';


import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationBaseComponent } from './components/restaurant/location-base/location.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: 'shop', component: ShopComponent },
  { path: 'nearme/islamabad', component: LocationBaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'locations', component: LocationsComponent },
  { path: 'payout', component: PayoutComponent },
  { path: 'nearme/pizza', component: ProductBaseComponent },

  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
