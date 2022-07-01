import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageElmtNotFoundComponent } from './pages/page-elmt-not-found/page-elmt-not-found.component';


@NgModule({
  declarations: [
    PageElmtNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
