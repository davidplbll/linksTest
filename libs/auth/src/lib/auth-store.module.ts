import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as userReducer from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(userReducer.userFeatureKey, userReducer.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [],
})
export class AuthStoreModule {}
