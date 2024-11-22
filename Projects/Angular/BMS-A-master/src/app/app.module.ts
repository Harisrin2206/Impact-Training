import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AppearalComponent } from './appearal/appearal.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AuthGuard } from './auth.guard';
import { UserGuard } from './guards/user.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { FooterComponent } from './footer/footer.component';
import { AdmindashboardoComponent } from './admindashboardo/admindashboardo.component';
import { AdmindashboardsComponent } from './admindashboards/admindashboards.component';
import { CartComponent } from './cart/cart.component';
import { SubmittedPageComponent } from './submitted-page/submitted-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    ForgetpasswordComponent,
      AppearalComponent,
      AccessoriesComponent,
      ExplorerComponent,
      RegistrationComponent,
      ContactpageComponent,
      CheckoutComponent,
      PaymentpageComponent,
      AdmindashboardComponent,
      HeaderFooterComponent,
      FooterComponent,
      AdmindashboardoComponent,
      AdmindashboardsComponent,
      CartComponent,
      SubmittedPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [AuthGuard , UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
