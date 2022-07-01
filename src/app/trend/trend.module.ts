import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendRoutingModule } from './trend-routing.module';
import { PagePostListComponent } from './pages/page-post-list/page-post-list.component';


@NgModule({
  declarations: [
    PagePostListComponent
  ],
  imports: [
    CommonModule,
    TrendRoutingModule
  ]
})
export class TrendModule { }
