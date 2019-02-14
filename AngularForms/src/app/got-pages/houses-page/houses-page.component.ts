import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nc-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.css'],
})
export class HousesPageComponent implements OnInit {
  customerForm: FormGroup;

  get isDirty(): boolean {
    return this.customerForm.dirty;
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });
  }
}
