import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileuserDataComponent } from './profileuser-data/profileuser-data.component';
import {HttpClientModule} from '@angular/common/http'
import {ServicesfreeapiService} from './servicesfreeapi.service'

@NgModule({
  declarations: [
    AppComponent,
    ProfileuserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ServicesfreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
