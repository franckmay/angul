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
import { MultiSelectModule } from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';

import { DockModule } from 'primeng/dock';

import { TreeTableComponent } from './components/tree-table/tree-table.component';
import { TT02Component } from './components/t-t02/t-t02.component';
import { TT03Component } from './components/t-t03/t-t03.component';
import { TT04Component } from './components/t-t04/t-t04.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeTableComponent,
    TT02Component,
    TT03Component,
    TT04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MultiSelectModule,
    DockModule,
    MenubarModule,
    ToastModule,
    DialogModule,
    TreeTableModule,
    GalleriaModule,
    ButtonModule,
    TerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
