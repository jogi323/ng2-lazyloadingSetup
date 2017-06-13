import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1Component } from './module1.component';
import { SampleComponent } from './sample/sample.component';
import { DummyComponent } from '../module2/sample/dummy/dummy.component';

const routes: Routes = [
  { 
    path:'',component:Module1Component,
      children:[
        {
          path:'sample',component:SampleComponent
        },
        {
          path:'dummy',component:DummyComponent
        }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
