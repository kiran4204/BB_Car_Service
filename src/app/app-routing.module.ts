import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'furniture',component:FurnitureComponent},
  {path: 'contacts',component:ContactsComponent},
  {path:'testimonal',component:TestimonalComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
