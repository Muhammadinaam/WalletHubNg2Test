import { Component, OnInit } from '@angular/core';
import { ChangesInformation } from '../../../classes/ChangesInformation';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styleUrls: ['./on-changes-demo.component.css']
})
export class OnChangesDemoComponent implements OnInit {

  status: number = 1;

  statusChangesInformation: ChangesInformation = new ChangesInformation();

  constructor() { }

  ngOnInit() {
  }

  statusChangedInChildEventHandler(event)
  {
    this.statusChangesInformation = event;
    //this.status = event.currentValue;
  }
}
