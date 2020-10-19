import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SalaChatAComponent } from './sala-chat-a/sala-chat-a.component';
import { SalaChatBComponent } from './sala-chat-b/sala-chat-b.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'principal', component : PrincipalComponent},
  {path: 'chatA', component : SalaChatAComponent},
  {path: 'chatB', component : SalaChatBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
