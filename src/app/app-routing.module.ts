import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AvatarComponent } from './avatar/avatar.component';


export const ROUTER: Routes = [
  { path: '', component: AvatarComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'menu', component: MenuHeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
