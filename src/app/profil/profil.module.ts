import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { PageProfilDetailComponent } from './pages/page-profil-detail/page-profil-detail.component';
import { PageUpdateProfilComponent } from './pages/page-update-profil/page-update-profil.component';
import { PageRelatedPostListComponent } from './pages/page-related-post-list/page-related-post-list.component';
import { PageDeleteProfilComponent } from './pages/page-delete-profil/page-delete-profil.component';


@NgModule({
  declarations: [
    PageProfilDetailComponent,
    PageUpdateProfilComponent,
    PageRelatedPostListComponent,
    PageDeleteProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
