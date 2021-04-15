import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mo-links-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent implements OnInit {
  @Output() OnLogout = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  logout() {
    this.OnLogout.emit();
  }
}
