import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { DummyComponent } from './dummy/dummy.component';
// import { SampleComponent } from './sample.component';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule
  ],
  declarations: [DummyComponent],
  exports:[DummyComponent]
})
export class SampleModule { }
