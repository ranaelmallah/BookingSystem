import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import{ReactiveFormsModule}from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { FormsModule} from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import{HttpClient, HttpClientModule}from '@angular/common/http';
import { SearchComponent } from './search/search.component';

import { ServiceItemsComponent } from './service-items/service-items.component';
import { ServiceDetailesComponent } from './service-detailes/service-detailes.component';
import { AccountComponent } from './account/account.component'





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    LoginComponent,
    SignUpComponent,
    ServicesComponent,
    HomeComponent,
    SearchComponent,
    ServiceItemsComponent,
    ServiceDetailesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
