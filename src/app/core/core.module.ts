import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreatePostModule } from '../create-post/create-post.module';
import { FriendListModule } from '../friend-list/friend-list.module';
import { LoginModule } from '../login/login.module';
import { MessagingModule } from '../messaging/messaging.module';
import { ProfilModule } from '../profil/profil.module';
import { TrendModule } from '../trend/trend.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    LoginModule,
    MessagingModule,
    FriendListModule,
    TrendModule,
    ProfilModule,
    CreatePostModule,
  ],
})
export class CoreModule {}
