import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ServicesComponent } from './services/services.component';
import { ServiceItemsComponent } from './service-items/service-items.component';
import { ServiceDetailesComponent } from './service-detailes/service-detailes.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
 { path:'contact',component:ContactComponent},
 { path:'log',component:LoginComponent},
 { path:'account',component:AccountComponent},
 { path:'signUp',component:SignUpComponent},
 { path:'search',component:SearchComponent},
{ path:'services',component:ServicesComponent},
{ path:'services/:id',component:ServiceItemsComponent},
{ path: 'service-info/:id', component:ServiceDetailesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { RouterModule };
