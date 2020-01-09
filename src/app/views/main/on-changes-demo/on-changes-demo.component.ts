import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styleUrls: ['./on-changes-demo.component.css']
})
export class OnChangesDemoComponent implements OnInit {

  status: number = 1;

  constructor() { }

  ngOnInit() {
  }

  statusChangedInChildEventHandler(value)
  {
    alert('Status change event triggered in [Child Component] and handled in [Parent Component]');
    this.status = value;
  }
}
