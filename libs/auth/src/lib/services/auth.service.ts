import { Injectable } from '@angular/core';
import { ApiClientService } from '@mo-links/api-client';
import { User, UserLogin, UserRegister } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiClientService) {}

  login(data: UserLogin) {
    return this.api.post<{ token: string }>(
      'login',
      data,
      'Error al ingresar por favor verifique sus datos'
    );
  }

  createUser(data: UserRegister) {
    return this.api.post<User>('register', data, 'Error al generar el cliente');
  }

  userInfo() {
    return this.api.get<User>('user/1', 'Error al traer data del usuario');
  }
}
