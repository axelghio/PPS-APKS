import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CosasLindasComponent } from './cosas-lindas/cosas-lindas.component';
import { CosasFeasComponent } from './cosas-feas/cosas-feas.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'principal', component : PrincipalComponent},
  {path: 'cosasLindas', component : CosasLindasComponent},
  {path: 'cosasFeas', component : CosasFeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
