import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    {
      label: 'Diagramm',
      path: 'diagramm'
    },
    {
      label: 'Tabelle',
      path: 'tabelle'
    },
    {
      label: 'Export',
      path: 'export'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
