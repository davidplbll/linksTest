import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UiModule } from '@mo-links/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthStoreModule } from './auth-store.module';
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthStoreModule,
    UiModule,
    AuthRoutingModule,
  ],
  declarations: [AuthFormComponent, AuthLayoutComponent, SignupFormComponent],
})
export class AuthModule {}
