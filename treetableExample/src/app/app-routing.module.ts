import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeTableComponent } from './components/tree-table/tree-table.component';


const routes: Routes = [
  // { path: '', redirectTo: '/trtable', pathMatch: 'full' },
{ path : 'trtable', component: TreeTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
