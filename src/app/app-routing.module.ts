import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // { 
  //   path:'',loadChildren:'app/module1/module1.module#Module1Module' 
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);