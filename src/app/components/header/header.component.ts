import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  navbarOpened = false;

  openNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
