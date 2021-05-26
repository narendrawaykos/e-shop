import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  isSignUpForm: boolean | undefined;
  isLoginForm: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      username: [, [Validators.required]],
      password: [, [Validators.required]],
    });
    this.signUpForm = this.formBuilder.group({
      name: [, [Validators.required]],
      dob: [, [Validators.required, dobValidator(18)]],
      username: [, [Validators.required]],
      password: [, [Validators.required]],
    });
  }

  radioChange(event: any) {
    switch (event.value) {
      case 'S':
        this.isLoginForm = false;
        this.isSignUpForm = true;
        this.loginForm.reset();
        break;
      case 'L':
        this.isLoginForm = true;
        this.isSignUpForm = false;
        this.signUpForm.reset();
        break;
    }
  }

  ngOnInit(): void {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get dob() {
    return this.signUpForm.get('dob');
  }
  login() {
    const formValues = this.loginForm.getRawValue();
    this.authService.login(formValues).subscribe((res) => {
      if (res) {
        this.authService.isLoggedIn.next(true);
        this.router.navigate(['/home']);
        this.openSnackBar('Logged in successfully', false);
      } else {
        this.openSnackBar('Error!', false);
      }
    });
  }

  signUp() {
    const formValues = this.loginForm.getRawValue();
    this.authService.signUp(formValues).subscribe((res) => {
      if (res) {
        this.openSnackBar(res.msg, false);
      }
    });
  }

  openSnackBar(msg: any, isError: any) {
    // this.router.navigate['']
    let config: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['snackbar-danger'],
    };
    this.snackBar.open(msg, 'OK', config);
  }
}
export function dobValidator(year: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden =
      control.value >=
      new Date(
        new Date().getFullYear() - 18,
        new Date().getMonth(),
        new Date().getDate()
      );
    console.log(forbidden);

    return forbidden ? { forbiddenDob: { value: control.value } } : null;
  };
}
