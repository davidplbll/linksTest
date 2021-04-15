import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlViewComponent } from './pages';
import { UrlFormComponent } from './components/url-form/url-form.component';
import { UrlItemComponent } from './components/url-item/url-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UrlUserEffects } from './effcts/url-user.effects';
import { reducer, urlUserFeatureKey } from './reducers/url-user.reducer';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UrlUserEffects]),
    StoreModule.forFeature(urlUserFeatureKey, reducer),
  ],
  declarations: [UrlViewComponent, UrlFormComponent, UrlItemComponent],
  exports: [UrlViewComponent, UrlFormComponent, UrlItemComponent],
})
export class UrlModule {}
