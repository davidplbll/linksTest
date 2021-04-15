import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './pages';
import { AuthFormComponent, SignupFormComponent } from './components';
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: AuthFormComponent,
        data: {
          login: true,
        },
      },
      {
        path: 'signup',
        component: SignupFormComponent,
        data: {
          signup: true,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
