import { Component, OnInit, Input } from '@angular/core';
import { User } from '@mo-links/auth/lib/interfaces/user';
@Component({
  selector: 'mo-links-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}
}
