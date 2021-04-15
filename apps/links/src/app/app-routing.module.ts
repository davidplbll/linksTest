import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlGuardGuard } from '@mo-links/api-client';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@mo-links/auth').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [UrlGuardGuard],
    loadChildren: () =>
      import('@mo-links/dashboard').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
