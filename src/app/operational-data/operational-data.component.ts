import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operational-data',
  templateUrl: './operational-data.component.html',
  styleUrls: ['./operational-data.component.scss']
})
export class OperationalDataComponent implements OnInit {
  @Input() type: string;
  @Input() quantity: number;

  constructor() { }

  ngOnInit() {
  }

}
