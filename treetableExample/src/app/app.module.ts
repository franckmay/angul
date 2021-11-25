import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
import { TerminalModule } from 'primeng/terminal';
import { TreeModule } from 'primeng/tree';

import { TreeTableModule } from 'primeng/treetable';

import { DockModule } from 'primeng/dock';

import { TreeTableComponent } from './components/tree-table/tree-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DockModule, MenubarModule, ToastModule, DialogModule,
    TreeTableModule, TreeModule, GalleriaModule, TerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
