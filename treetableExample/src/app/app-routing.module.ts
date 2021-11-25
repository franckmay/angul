import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TT02Component } from './components/t-t02/t-t02.component';
import { TT03Component } from './components/t-t03/t-t03.component';
import { TT04Component } from './components/t-t04/t-t04.component';
import { TreeTableComponent } from './components/tree-table/tree-table.component';


const routes: Routes = [
  // { path: '', redirectTo: '/trtable', pathMatch: 'full' },
{ path : 'trtable', component: TreeTableComponent },
{ path : 'tt02', component: TT02Component },
{ path : 'tt03', component: TT03Component },
{ path : 'tt04', component: TT04Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
