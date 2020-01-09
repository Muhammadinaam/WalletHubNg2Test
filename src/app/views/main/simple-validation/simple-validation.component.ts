import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-validation',
  templateUrl: './simple-validation.component.html',
  styleUrls: ['./simple-validation.component.css']
})
export class SimpleValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(name, email) {

    if(name == '' || name.length < 3) {
      alert('Name should be atleast 3 characters long');
      return;
    }

    if(email == '') {
      alert('Email is required');
      return;
    }

    if( ! this.isEmailValid(email) ) {
      alert('Please enter valid Email Address');
      return;
    }

    alert('Form Submitted Successfully');

  }

  isEmailValid(email) 
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
     
    return (false)
  }

}
