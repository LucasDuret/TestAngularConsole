import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavMainComponent} from './nav-main/nav-main.component';
import {AdressFormComponent} from './adress-form/adress-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {TreeComponent} from './tree/tree.component';
import {FlexLayoutComponent} from './flex-layout/flex-layout.component';
import {AgGridComponent} from './ag-grid/ag-grid.component';
import {VerticalTimelineComponent} from './vertical-timeline/vertical-timeline.component';

// routes
const appRoutes: Routes = [
  {
    path: '',
    component: NavMainComponent,
    children: [
      { path: 'adress', component: AdressFormComponent, data: { pageTitle: 'Adress'} },
      { path: 'dash', component: DashboardComponent, data: { pageTitle: 'Dashboard'} },
      { path: 'table', component: TableComponent, data: { pageTitle: 'Table'} },
      { path: 'tree', component: TreeComponent, data: { pageTitle: 'Tree'} },
      { path: 'flex', component: FlexLayoutComponent, data: { pageTitle: 'Flex'} },
      { path: 'grid', component: AgGridComponent, data: { pageTitle: 'Grid'} },
      { path: 'timeline', component: VerticalTimelineComponent, data: { pageTitle: 'Timeline'} },
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
