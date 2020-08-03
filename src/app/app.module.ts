import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule, ROUTER } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './avatar/avatar.component';
import { GlobalService } from '../app/global.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
   declarations: [
      AppComponent,
      MenuHeaderComponent,
      AvatarComponent,
       
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTER),
      ReactiveFormsModule,
      HttpClientModule,
      GridModule
   ],
   providers: [
      FormBuilder,
   ],
   bootstrap: [
      AppComponent
   ],
   exports: []
})
export class AppModule { }
