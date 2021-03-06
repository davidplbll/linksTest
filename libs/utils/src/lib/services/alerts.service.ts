import { Injectable } from '@angular/core';
import sweetalert2 from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  /**
   * @param  {string} message
   * @returns void
   */
  MessageError(message: string): void {
    sweetalert2({
      type: 'error',
      title: 'Error',
      confirmButtonText: 'Cerrar',
      text: message,
    }).catch((err) => console.log(err));
  }

  /**
   * @param  {string} message
   * @returns void
   */
  Messagesuccess(message: string, title?: string): void {
    sweetalert2({
      type: 'success',
      title: title ?? 'Completado',
      text: message,
      timer: 2000,
      showConfirmButton: false,
    }).catch((err) => console.log(err));
  }

  /**
   * @param  {string} message
   * @returns void
   */
  MessagesuccessConfirm(message: string, title?: string): void {
    sweetalert2({
      type: 'success',
      title: title ?? 'Completado',
      text: message,
      confirmButtonText: 'Cerrar',
    }).catch((err) => console.log(err));
  }
  /**
   * @param  {string} message
   * @returns void
   */
  MessageInfo(message: string, titleAlert: string): void {
    sweetalert2({
      type: 'info',
      title: titleAlert,
      text: message,
      timer: 2000,
      showConfirmButton: false,
    }).catch((err) => console.log(err));
  }
  /**
   * @param  {string} message
   * @returns void
   */
  MessageInfoConfirm(message: string, titleAlert: string): void {
    sweetalert2({
      type: 'info',
      title: titleAlert,
      text: message,
      showConfirmButton: true,
    }).catch((err) => console.log(err));
  }

  /**
   * @param  {string} text
   * @param  {string} title
   * @returns Promise<boolean>
   */
  MessageConfirm(
    textMessage: string,
    titleConfirmation: string
  ): Promise<boolean> {
    return sweetalert2({
      type: 'warning',
      title: titleConfirmation,
      text: textMessage,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((response) => response.value);
  }
}
