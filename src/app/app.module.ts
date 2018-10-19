import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {HomeComponent} from './components/home/home.component';
import {UserService} from './service/user.service';
import { NewuserComponent } from './components/newuser/newuser.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'user/:id', component: UserComponent},
    {path: 'ajouteruser', component: NewuserComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home', pathMatch: 'full' },
    
]),
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
