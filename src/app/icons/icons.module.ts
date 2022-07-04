import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconCloseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconCloseComponent
  ]
})
export class IconsModule { }
