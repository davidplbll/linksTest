import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsService, EnvironmentService } from './services';
@NgModule({
  imports: [CommonModule],
})
export class UtilsModule {
  static forRoot(provider): ModuleWithProviders<any> {
    return {
      ngModule: UtilsModule,
      providers: [
        AlertsService,
        {
          provide: EnvironmentService,
          useValue: provider,
        },
      ],
    };
  }
}
