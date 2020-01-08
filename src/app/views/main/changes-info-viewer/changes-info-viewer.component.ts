import { Component, OnInit, Input } from '@angular/core';
import { ChangesInformation } from '../../../classes/ChangesInformation';

@Component({
  selector: 'app-changes-info-viewer',
  templateUrl: './changes-info-viewer.component.html',
  styleUrls: ['./changes-info-viewer.component.css']
})
export class ChangesInfoViewerComponent implements OnInit {

  @Input() changesInformation: ChangesInformation;

  constructor() { }

  ngOnInit() {
  }

}
