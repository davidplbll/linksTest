import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UiModule } from '@mo-links/ui';
import { UrlModule } from '@mo-links/url';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AuthStoreModule } from '@mo-links/auth/lib/auth-store.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UrlModule,
    UiModule,
    AuthStoreModule,
  ],
  declarations: [DashboardComponent, UserInfoComponent],
})
export class DashboardModule {}
