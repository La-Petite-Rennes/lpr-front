import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lpr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogout() {
    alert('La fleur en bouquet fane, et jamais ne renaît !');
  }

}
