import { Component, OnInit } from '@angular/core';
import { DummyAuthService } from '../../../services/dummy-auth.service';

@Component({
  selector: 'app-unit-test-demo',
  templateUrl: './unit-test-demo.component.html',
  styleUrls: ['./unit-test-demo.component.css']
})
export class UnitTestDemoComponent implements OnInit {

  count = 0;

  constructor(private auth: DummyAuthService) { }

  ngOnInit() {
  }

  plusBtnClicked() {
    this.count = this.count + 1;
  }

  minusBtnClicked() {
    this.count = this.count - 1;
  }

}
