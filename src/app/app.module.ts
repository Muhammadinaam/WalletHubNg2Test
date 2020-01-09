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
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
