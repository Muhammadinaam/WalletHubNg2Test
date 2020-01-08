import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';


const routes: Routes = [
  {
    path: '',
    component: LazyComponentComponent,
    data: {
      title: 'Lazy Component'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }
