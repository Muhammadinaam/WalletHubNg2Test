import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '../../dist/@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { OnChangesDemoComponent } from './views/main/on-changes-demo/on-changes-demo.component';
import { OnChangesDemoChildComponent } from './views/main/on-changes-demo-child/on-changes-demo-child.component';
import { GuardedComponent } from './views/main/guarded/guarded.component';
import { NoPermissionComponent } from './views/main/no-permission/no-permission.component';
import { DataTransferFromComponent } from './views/main/data-transfer-from/data-transfer-from.component';
import { DataTransferToComponent } from './views/main/data-transfer-to/data-transfer-to.component';
import { NgAnimationComponent } from './views/main/ng-animation/ng-animation.component';
import { CssAnimationComponent } from './views/main/css-animation/css-animation.component';
import { NestedRouteDemoComponent } from './views/main/nested-route-demo/nested-route-demo.component';
import { NestedComponent1Component } from './views/main/nested-component1/nested-component1.component';
import { NestedComponent2Component } from './views/main/nested-component2/nested-component2.component';
import { SimpleValidationComponent } from './views/main/simple-validation/simple-validation.component';
import { CardComponent } from './components/card/card.component';
import { NgContentDemoComponent } from './views/main/ng-content-demo/ng-content-demo.component';
import { NineTenComponent } from './views/main/nine-ten/nine-ten.component';
import { CurrencyDirective } from './directives/currency.directive';
import { UnitTestDemoComponent } from './views/main/unit-test-demo/unit-test-demo.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    OnChangesDemoComponent,
    OnChangesDemoChildComponent,
    GuardedComponent,
    NoPermissionComponent,
    DataTransferFromComponent,
    DataTransferToComponent,
    NgAnimationComponent,
    CssAnimationComponent,
    NestedRouteDemoComponent,
    NestedComponent1Component,
    NestedComponent2Component,
    SimpleValidationComponent,
    CardComponent,
    NgContentDemoComponent,
    NineTenComponent,
    CurrencyDirective,
    UnitTestDemoComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
