import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operational-data',
  templateUrl: './operational-data.component.html',
  styleUrls: ['./operational-data.component.scss']
})
export class OperationalDataComponent implements OnInit {
  @Input() type: string;
  @Input() quantity: number;

  @Output() quantityChange = new EventEmitter();

  increment() {
    this.quantity++
  }

  decrement() {
    this.quantity--
  }

  ngOnInit() {
  }

}
