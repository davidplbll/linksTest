import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [PrincipalPageComponent],
  declarations: [PrincipalPageComponent],
})
export class UiModule {}
