import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarTableComponent } from './toolbar-table/toolbar-table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { DataService } from './data.service';
 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarTableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableComponent,
    PaginationTableComponent,
  ],
  imports: [
    BrowserModule,NgbModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
    
    providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
