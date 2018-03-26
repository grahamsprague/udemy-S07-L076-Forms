import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // validators and ansyncvalidators must be in sep variables or arrays
  form = new FormGroup({
    account: new FormGroup ({
      username : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique
      ),
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        UsernameValidators.cannotContainSpace
      ])

    })

});

login() {
 // let isValid = authService.login(this.form.value);
  // if (!isValid) {
    console.log('login is running');
    this.form.setErrors({
      invalidLogin: true
    });
  // }

}

get username() {
  return this.form.get('account.username');
}

get password() {
  return this.form.get('account.password');
}

}
