import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePostRoutingModule } from './create-post-routing.module';
import { PageCreatePostComponent } from './pages/page-create-post/page-create-post.component';


@NgModule({
  declarations: [
    PageCreatePostComponent
  ],
  imports: [
    CommonModule,
    CreatePostRoutingModule
  ]
})
export class CreatePostModule { }
