import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UrlUser } from '../../intefaces';
import { AlertsService } from '@mo-links/utils';
@Component({
  selector: 'mo-links-url-item',
  templateUrl: './url-item.component.html',
  styleUrls: ['./url-item.component.scss'],
})
export class UrlItemComponent implements OnInit {
  @Input() url: UrlUser;
  @Output() deleteUrl: EventEmitter<string> = new EventEmitter<string>();
  constructor(private alertsService: AlertsService) {}

  ngOnInit(): void {}

  async deleteUrlConfirm() {
    const response = await this.alertsService.MessageConfirm(
      `Seguro de eliminar el url ${this.url.name}`,
      'Eliminar url'
    );
    if (response) {
      this.deleteUrl.emit(this.url.id);
    }
  }
}
