import { Component } from '@angular/core';
import { data } from './mock-operational-data';
import { OperationalData } from './operational-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  operationalData:OperationalData[] = data
}
