import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nine-ten',
  templateUrl: './nine-ten.component.html',
  styleUrls: ['./nine-ten.component.css']
})
export class NineTenComponent implements OnInit {

  // properties to be bound in template
  btnClass = "btn btn-primary";
  isBtnDisabled = true;
  btnText = "Properties Bound Button";

  constructor() { }

  ngOnInit() {
  }

}
