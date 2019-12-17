import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiSearchComponent } from './api-search/api-search.component';


const routes: Routes = [
    {path: '', component: ApiSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSearchRoutingModule { }
