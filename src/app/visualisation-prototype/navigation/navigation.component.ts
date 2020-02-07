import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

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
