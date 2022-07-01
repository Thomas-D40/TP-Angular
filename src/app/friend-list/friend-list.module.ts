import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FriendListRoutingModule } from './friend-list-routing.module';
import { PageFriendListComponent } from './pages/page-friend-list/page-friend-list.component';
import { PageFriendRequestComponent } from './pages/page-friend-request/page-friend-request.component';
import { PageSuggestionListComponent } from './pages/page-suggestion-list/page-suggestion-list.component';

@NgModule({
  declarations: [
    PageFriendListComponent,
    PageFriendRequestComponent,
    PageSuggestionListComponent,
  ],
  imports: [CommonModule, FriendListRoutingModule],
})
export class FriendListModule {}
