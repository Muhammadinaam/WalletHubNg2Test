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
import { NgAnimationComponent } from './views/main/ng-animation/ng-animation.component';
import { CssAnimationComponent } from './views/main/css-animation/css-animation.component';
import { NestedRouteDemoComponent } from './views/main/nested-route-demo/nested-route-demo.component';
import { NestedComponent1Component } from './views/main/nested-component1/nested-component1.component';
import { NestedComponent2Component } from './views/main/nested-component2/nested-component2.component';
import { SimpleValidationComponent } from './views/main/simple-validation/simple-validation.component';
import { NgContentDemoComponent } from './views/main/ng-content-demo/ng-content-demo.component';
import { NineTenComponent } from './views/main/nine-ten/nine-ten.component';
import { UnitTestDemoComponent } from './views/main/unit-test-demo/unit-test-demo.component';

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
          title: 'Data Transfer',
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
      {
        path: 'ng-animation',
        data: {
          title: 'Angular Animation Demo',
          animation: 'ngAnimationPage',
        },
        component: NgAnimationComponent
      },
      {
        path: 'css-animation',
        data: {
          title: 'CSS Animation Demo',
        },
        component: CssAnimationComponent
      },
      {
        path: 'nested-route-demo',
        data: {
          title: 'Nested Route Demo',
        },
        component: NestedRouteDemoComponent,
        children: [
          {
            path: 'nested-menu-1',
            component: NestedComponent1Component
          },
          {
            path: 'nested-menu-2',
            component: NestedComponent2Component
          },
        ]
      },
      {
        path: 'simple-validation',
        data: {
          title: 'Simple Validation Demo',
        },
        component: SimpleValidationComponent
      },
      {
        path: 'ng-content-demo',
        data: {
          title: 'Ng-Content Demo',
        },
        component: NgContentDemoComponent
      },
      {
        path: 'nine-and-ten',
        data: {
          title: 'Directive Demo and Property Binding Demo',
        },
        component: NineTenComponent
      },

      {
        path: 'unit-test',
        data: {
          title: 'Unit Test',
        },
        component: UnitTestDemoComponent
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
