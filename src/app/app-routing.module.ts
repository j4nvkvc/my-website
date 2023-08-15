import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationDetailsComponent } from './realisation-details/realisation-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },

  { path: 'about', component: AboutComponent},

  { path: 'realisations', component: RealisationsComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'realisation-details/:id', component:RealisationDetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
