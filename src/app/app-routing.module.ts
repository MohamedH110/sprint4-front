import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/secure.guard';
import { ElevesComponent } from './eleves/eleves.component';


const routes: Routes = [
  {path : "eleves" , component : ElevesComponent, canActivate:[AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
