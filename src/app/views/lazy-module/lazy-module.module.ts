import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';


@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule,
    LazyModuleRoutingModule
  ]
})
export class LazyModuleModule { }
