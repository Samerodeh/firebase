import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';



import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// new com
import { HeroComponent } from './components/home/hero/hero.component';
import { CategoryComponent } from './components/home/category/category.component';
import { BrandsComponent } from './components/home/brands/brands.component';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { LocationBaseComponent } from './components/restaurant/location-base/location.component';
import { ShopComponent } from './components/shop/shop.component';
import { BioComponent } from './components/shop/bio/bio.component';
import { DealsComponent } from './components/shop/deals/deals.component';
import { PayoutComponent } from './components/payout/payout.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { MenuComponent } from './components/shop/menu/menu.component';
import { InfoComponent } from './components/shop/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccountComponent } from './components/account/account.component';

import { LocationsComponent } from './components/locations/locations.component';
import { ProductBaseComponent } from './components/restaurant/product-base/product-base.component';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/shop/review/review.component';
import { NewseltterComponent } from './components/home/newseltter/newseltter.component';

@NgModule({
  declarations: [
    
    LocationsComponent,
    ProductBaseComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    HeroComponent,
    CategoryComponent,
    BrandsComponent,
    RestaurantComponent,
    LocationBaseComponent,
    ShopComponent,
    BioComponent,
    DealsComponent,
    PayoutComponent,
    FeaturesComponent,
    MenuComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
  
    ReviewComponent,
    NewseltterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
