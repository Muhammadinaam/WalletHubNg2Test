import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ChangesInformation } from '../../../classes/ChangesInformation';

@Component({
  selector: 'app-on-changes-demo-child',
  templateUrl: './on-changes-demo-child.component.html',
  styleUrls: ['./on-changes-demo-child.component.css']
})
export class OnChangesDemoChildComponent implements OnInit, OnChanges {

  @Input() status: number;
  @Output() statusChanged = new EventEmitter();

  
  statusChangesInformation: ChangesInformation = new ChangesInformation();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['status']) {
      this.statusChangesInformation.changedIn = 'Parent Component';
      this.statusChangesInformation.previousValue = changes['status'].previousValue;
      this.statusChangesInformation.currentValue = changes['status'].currentValue;
      this.statusChangesInformation.isChangedForFirstTime = changes['status'].firstChange;
    }
  }

  statusChangedHandler(event) {
    this.statusChangesInformation.changedIn = 'Child Component';
    this.statusChangesInformation.previousValue = null;
    this.statusChangesInformation.currentValue = event.target.value;
    this.statusChangesInformation.isChangedForFirstTime = null;

    this.statusChanged.emit(this.statusChangesInformation);
  }

}
