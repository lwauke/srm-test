import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listItems = [
    {text: 'Painel de Gestão', icon: 'icon'},
    {text: 'Conta Digital', icon: 'icon'},
    {text: 'Ant. de Recebíveis', icon: 'icon'},
  ]

  responsiveMenuShowing: false;

  ngOnInit() {
  }

}
