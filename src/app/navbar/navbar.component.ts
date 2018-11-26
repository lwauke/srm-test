import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listItems = [
    {text: 'Painel de Gestão', icon: 'globe'},
    {text: 'Conta Digital', icon: 'at'},
    {text: 'Ant. de Recebíveis', icon: 'chart-bar'},
  ]

  responsiveMenuShowing: false;

  ngOnInit() {
  }

}
