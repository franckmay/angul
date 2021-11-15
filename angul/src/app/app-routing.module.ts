import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { EmployeFormComponent} from './employe-form/employe-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employes', component: EmployeComponent},
  {path: 'details/:id', component: EmployeDetailComponent},
  {path: 'formulaire', component: EmployeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
