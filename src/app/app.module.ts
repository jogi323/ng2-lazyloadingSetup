import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Main Routing File
import { routing } from './app-routing.module';

//Modules with sample component 
import { Module1Module } from './module1/module1.module';

//Module with sample module(Another module)
import { Module2Module } from './module2/module2.module';

//App Component
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Module1Module,
    Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
