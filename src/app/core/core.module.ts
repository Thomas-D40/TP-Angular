import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreatePostModule } from '../create-post/create-post.module';
import { FriendListModule } from '../friend-list/friend-list.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { MessagingModule } from '../messaging/messaging.module';
import { ProfilModule } from '../profil/profil.module';
import { TrendModule } from '../trend/trend.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [
    LoginModule,
    MessagingModule,
    FriendListModule,
    TrendModule,
    ProfilModule,
    CreatePostModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    UiModule,
    IconsModule,
  ],
})
export class CoreModule {}
