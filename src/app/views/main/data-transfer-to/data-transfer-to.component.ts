import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-transfer-to',
  templateUrl: './data-transfer-to.component.html',
  styleUrls: ['./data-transfer-to.component.css']
})
export class DataTransferToComponent implements OnInit {

  inputFromPreviousPage = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(data => {
        this.inputFromPreviousPage = window.history.state.input;
      });
  }

}
