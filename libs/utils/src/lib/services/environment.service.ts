import { Injectable } from '@angular/core';
import { Environment } from './../interfaces';
@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  public environment: Environment;
  constructor() {}
}
