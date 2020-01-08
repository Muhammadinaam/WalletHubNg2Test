import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { OnChangesDemoComponent } from './views/main/on-changes-demo/on-changes-demo.component';
import { GuardedComponent } from './views/main/guarded/guarded.component';
import { CanActivateDeactivateGuardedGuard } from './guards/can-activate-deactivate-guarded.guard';
import { NoPermissionComponent } from './views/main/no-permission/no-permission.component';
import { DataTransferFromComponent } from './views/main/data-transfer-from/data-transfer-from.component';
import { DataTransferToComponent } from './views/main/data-transfer-to/data-transfer-to.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'on-changes-demo',
        data: {
          title: 'On Changes Demo'
        },
        component: OnChangesDemoComponent
      },
      {
        path: 'lazy-load-component',
        loadChildren: () => import('./views/lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
      },
      {
        path: 'guarded-route',
        data: {
          title: 'Guarded Component'
        },
        canDeactivate: [CanActivateDeactivateGuardedGuard],
        canActivate: [CanActivateDeactivateGuardedGuard],
        component: GuardedComponent
      },
      {
        path: 'no-permission',
        data: {
          title: 'No Permission'
        },
        component: NoPermissionComponent
      },
      {
        path: 'data-transfer',
        data: {
          title: 'Data Transfer'
        },
        component: DataTransferFromComponent
      },
      {
        path: 'data-transfer-to',
        data: {
          title: 'Data Transfer To'
        },
        component: DataTransferToComponent
      },
    ]
  },
  { path: '**', component: DefaultLayoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
