import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { SampleComponent } from './sample/sample.component';
import { DummyComponent } from '../module2/sample/dummy/dummy.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Module1Component, SampleComponent,DummyComponent]
})
export class Module1Module { }
