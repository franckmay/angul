import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { FormsModule } from '@angular/forms';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    EmployeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
