import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NumberValidators } from '../Validators/number.validators';

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { range: true };
  }

  return null;
}

function myValidator(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value != null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { interval: true };
    }

    return null;
  };
}

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmEmailControl = c.get('confirmEmail');

  if (emailControl.value !== confirmEmailControl.value) {
    return { confirmEmail: true };
  }

  return null;
}

@Component({
  selector: 'nc-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.css'],
})
export class ReactivePageComponent implements OnInit, AfterViewInit {
  customerForm: FormGroup;
  emailMessage: string;

  get tags(): FormArray {
    return <FormArray>this.customerForm.get('tags');
  }

  private emailValidationMessages = {
    required: 'Email required',
    email: 'Invalid email',
  };

  constructor(private readonly fb: FormBuilder) {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: [{ value: '', disabled: false }, [Validators.required, Validators.min(3), Validators.maxLength(3)]],
      disabledField: { value: 'do not change', disabled: true },
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required, Validators.email]],
        },
        { validator: emailMatcher },
      ),

      rating: [null, [Validators.required, ratingRange]],
      rating2: [null, [myValidator(10, 12), NumberValidators.range(10, 12)]],
      phoneNumber: '',
      notification: 'email',
      sendCatalog: true,
      tags: this.fb.array([this.buildTags()]),
    });

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });

    this.customerForm.patchValue({ firstName: 'rd' });

    this.customerForm.get('notification').valueChanges.subscribe(value => {
      this.setNotification(value);
    });

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(() => this.setMessage(emailControl));
  }

  buildTags(): FormGroup {
    return this.fb.group({
      tagType: 'home',
      tag: '',
    });
  }

  addTagControls() {
    this.tags.push(this.buildTags());
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName: 'Arya',
      lastName: 'Stark',
      phoneNumber: '',
      disabledField: '',
      emailGroup: {
        email: 'noone@got.com',
        confirmEmail: 'noone@got.com',
      },
      notification: 'email',
      rating: 6,
      rating2: 50,
      sendCatalog: true,
    });

    this.customerForm.markAsTouched();
    this.customerForm.markAsDirty();
  }

  setNotification(notificationValue: string) {
    const phoneControl = this.customerForm.get('phoneNumber');
    const emailControl = this.customerForm.get('emailGroup');

    if (notificationValue === 'sms') {
      phoneControl.setValidators(Validators.required);
      emailControl.clearValidators();
    } else {
      phoneControl.clearValidators();
      emailControl.setValidators([Validators.required, Validators.email]);
    }

    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map(key => (this.emailMessage += this.emailValidationMessages[key]))
        .join(' ');
    }
  }
}
