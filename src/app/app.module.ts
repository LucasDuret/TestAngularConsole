import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMainComponent } from './nav-main/nav-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule,
  MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatInputModule,
  MatSelectModule, MatRadioModule, MatSlideToggleModule, MatDialogModule, MatTabsModule, MatSnackBarModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutComponent, SettingComponent} from './flex-layout/flex-layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    DashboardComponent,
    TableComponent,
    TreeComponent,
    AdressFormComponent,
    FlexLayoutComponent,
    SettingComponent,
    AgGridComponent,
    VerticalTimelineComponent
  ],
  entryComponents: [
    AppComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ContentLoaderModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    VerticalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
