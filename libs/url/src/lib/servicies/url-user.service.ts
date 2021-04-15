import { Injectable } from '@angular/core';
import { UrlUser } from '../intefaces';
import { ApiClientService } from '@mo-links/api-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UrlUserService {
  constructor(private api: ApiClientService) {}
  getUrlList(): Observable<UrlUser[]> {
    return this.api.get<UrlUser[]>('links', 'Error al consultar las url');
  }
  createUrl(data: UrlUser): Observable<UrlUser> {
    return this.api.post<UrlUser>('links', data, 'Error al crear la url');
  }
  deleteUrl(id: string): Observable<UrlUser> {
    return this.api.delete<UrlUser>(`links/${id}`, 'Error al eliminar la url');
  }
}
