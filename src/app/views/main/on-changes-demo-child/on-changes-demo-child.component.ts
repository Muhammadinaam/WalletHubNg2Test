import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-on-changes-demo-child',
  templateUrl: './on-changes-demo-child.component.html',
  styleUrls: ['./on-changes-demo-child.component.css']
})
export class OnChangesDemoChildComponent implements OnInit, OnChanges {

  @Input() status: number;
  @Output() statusChanged = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['status']) {
      alert('Status change detected in ngOnChanges in [Child Component]. Change Information: ' + JSON.stringify(changes));
    }
  }

  statusChangedHandler(event) {
    this.statusChanged.emit(event.target.value);
  }

}
