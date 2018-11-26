import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listItems = [
    {text: 'Painel de Gestão', icon: 'internet'},
    {text: 'Conta Digital', icon: 'email'},
    {text: 'Ant. de Recebíveis', icon: 'bar-chart'},
  ]

  responsiveMenuShowing: Boolean = false;

  ngOnInit() {
  }

}
