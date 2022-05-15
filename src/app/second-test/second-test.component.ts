import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.scss'],
})
export class SecondTestComponent implements OnInit {
  gretting: string = '';
  grettingForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  grettingMe() {
    this.gretting = `Hola, ${this.grettingForm.controls['name'].value}`;
  }
}
