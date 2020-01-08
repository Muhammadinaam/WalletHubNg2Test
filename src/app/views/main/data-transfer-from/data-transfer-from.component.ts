import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-transfer-from',
  templateUrl: './data-transfer-from.component.html',
  styleUrls: ['./data-transfer-from.component.css']
})
export class DataTransferFromComponent implements OnInit {

  input;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  send() {
    if(!this.input || this.input == '') {
      alert('Please enter some text');
      return;
    }

    this.router.navigate(['data-transfer-to'], { state: { input: this.input } });
  }

}
