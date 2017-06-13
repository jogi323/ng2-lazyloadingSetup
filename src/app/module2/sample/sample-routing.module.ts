import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {
    path:'',component:DummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
