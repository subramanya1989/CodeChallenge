import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSearchRoutingModule } from './api-search-routing.module';
import { ApiSearchComponent } from './api-search/api-search.component';

@NgModule({
  declarations: [ApiSearchComponent],
  imports: [
    CommonModule,
    AppSearchRoutingModule
  ]
})
export class ApiSearchModule { }
