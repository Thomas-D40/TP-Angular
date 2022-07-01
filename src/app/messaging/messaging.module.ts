import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';
import { PageListConversationComponent } from './pages/page-list-conversation/page-list-conversation.component';
import { PageConversationInProgressComponent } from './pages/page-conversation-in-progress/page-conversation-in-progress.component';


@NgModule({
  declarations: [
    PageListConversationComponent,
    PageConversationInProgressComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule
  ]
})
export class MessagingModule { }
