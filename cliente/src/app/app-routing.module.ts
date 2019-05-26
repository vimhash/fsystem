import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DeudasComponent } from "./deudas/deudas.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'deudas', component: DeudasComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
